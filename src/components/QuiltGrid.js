import React, {Component} from 'react';
import Cell from './Cell';
import DimensionsSelect from './DimensionsSelect';
import ColorList from './ColorList';
import StyleOutput from './StyleOutput';
import './style/QuiltGrid.css';


class QuiltGrid extends Component {
	constructor(props) {
    super(props);
    this.state = {
    	colorCounters: [['white', 'white', 'white', 'white', 'white'], 
    									['white', 'white', 'white', 'white', 'white'],
    									['white', 'white', 'white', 'white', 'white'],
    									['white', 'white', 'white', 'white', 'white'],
    									['white', 'white', 'white', 'white', 'white']],
    	activeColor: 'white',
    	// X --> # of colummns, Y --> # of rows
    	cellCountX: 5,
    	cellCountY: 5,
    	storeCellCountX: 5,
    	storeCellCountY: 5,
    	cellHeight: 30,
    	cellWidth: 30,
    	colors: ['white', 'hotpink', 'salmon', 'khaki', 'palegreen', 'aquamarine', 'skyblue', 'violet', 'pink', 'slateblue','darkslateblue'],
    };
    this.updateGridDimensions = this.updateGridDimensions.bind(this);
    this.storeGridDimensions = this.storeGridDimensions.bind(this);
    this.updateCellDimensions = this.updateCellDimensions.bind(this);
  }

	// click function for the color cell
	changeColor(rowNum, i){
		let colorCounters = this.state.colorCounters.slice()
		colorCounters[rowNum][i] = this.state.activeColor

		this.setState({colorCounters : colorCounters})
	}

	// calculate the height and width of the grid render in px
	calcGrid(){
		const widthDim = (this.state.cellWidth * this.state.cellCountX) + (3 * this.state.cellCountX)
		const heightDim = (this.state.cellHeight * this.state.cellCountY) + (3 * this.state.cellCountY)

		return {height: heightDim + 'px', width: widthDim + 'px'}
	}

	// return grid based on form inputs
	renderGrid(){
		// style for the grid output
		const gridDimensions = this.calcGrid()
		// copy of colors from state
		let gridColors = this.state.colorCounters.slice()

		gridColors = gridColors.map((row, i) => 
			this.renderRow(row, i)
  	)

		return(
			<div 
      	className="grid"
      	style={gridDimensions}
      >
      	{gridColors}
      </div>
		)
	}

	// return row of cells for the grid output
	renderRow(row, rowNum){
		return(
			row.map((color, i) => 
				<Cell 
					key = {"row" + rowNum + "col" + i}
	    		color = {this.state.colorCounters[rowNum][i]}
	    		changeColor = {() => this.changeColor(rowNum, i)}
	    		height = {this.state.cellHeight}
	    		width = {this.state.cellWidth}
	    	/>
			)
		)
	}

	// update grid dimensions based on input
	updateGridDimensions(event){
		const countX = parseInt(this.state.storeCellCountX)
		const countY = parseInt(this.state.storeCellCountY)
		this.setState({
			cellCountX : countX,
			cellCountY : countY
		}, this.updateColorCounter(countX, countY))
	}

	// store grid dimensions based on input
	storeGridDimensions(event){
		this.setState({
			[event.target.name] : event.target.value
		})
	}

	// update cell dimensions based on inpuu
	updateCellDimensions(event){
		this.setState({
			[event.target.name] : event.target.value
		})
	}

	// update color counter to match grid dimensions in set state
	updateColorCounter(countX, countY){
		const currentRow = this.state.colorCounters.length
		const currentCol = this.state.colorCounters[0].length
		let colorCounters = this.state.colorCounters.slice()

		// add to every row
		if (countX > currentCol && countX !== ''){
			colorCounters.forEach((row) => {
					for (let i = currentCol; i < countX; i++){
					row.push(this.state.activeColor)
				}
			})
		// remove from every row
		}	else if (countX < currentCol && countX !== ''){
			colorCounters.forEach((row) => {
				for (let i = countX; i < currentCol; i++){
					row.pop()
				}
			})
		}

		// add row
		if (countY > currentRow && countY !== ''){
			for (let i = currentRow; i < countY; i++){
					colorCounters.push(Array(colorCounters[0].length).fill(this.state.activeColor))
				}
		}
		// remove row
		if (countY < currentRow && countY !== ''){
			for (let i = countY; i < currentRow; i++){
					colorCounters.pop()
				}
		}

		this.setState({colorCounters : colorCounters})
	}

	// add new color to the list
	addColor(color){
		let colors = this.state.colors.slice()
		colors.push(color)
		this.setState({
			colors : colors
		})
	}	

	// remove color from the list
	removeColor(color){
		let colors = this.state.colors.slice()
		colors = colors.filter((x) => 
			x !== color
		)
		if (this.state.activeColor === color){
			this.setState({
				colors : colors,
				activeColor : "white"
			})
		} else {
			this.setState({
				colors : colors
			})
		}
		
	}

	// update active color
	updateActiveColor(activeColor){
		this.setState({
			activeColor
		})
	}

	// generate css for displaying as CSS for a single div
	generateCSS(){
		const styleWidth = "  width: " + this.state.cellWidth +"px;\n"
		const styleHeight = "  height: " + this.state.cellHeight + "px;\n"
		const styleBgColor = "  background-color: " + this.state.colorCounters[0][0] + ";\n"
		const styleBoxShadow = this.state.colorCounters.map((row,i) => {
			return "\n" + this.generateBoxShadowRow(row, i)
		})

		return ".quilt{\n  display:block;\n" + styleWidth + styleHeight + styleBgColor +"  box-shadow: " + styleBoxShadow.toString()+ ";\n}"
	}

	// generate css for a row in the box shadow
	generateBoxShadowRow(row, rowNum){
		const offsetY = (rowNum * this.state.cellHeight) + "px"
		let offsetX

		return row.map((color, i) =>{
			offsetX = (i * this.state.cellWidth) + "px"
			return "\n\t" + offsetX + " " + offsetY + " " + color
		})
	}


	// RENDER METHOD
	render(){

		return (
	    <div className="QuiltGrid">
	    	<div className="gridEditor">
		      {this.renderGrid()}
	      </div>

	      <div className="userInput">
	      	<DimensionsSelect 
	      		label = {'Dimensions'}
	      		units = {"cells"}
	      		valX = {this.state.storeCellCountX}
	      		valY = {this.state.storeCellCountY}
	      		nameX = "storeCellCountX"
	      		nameY = "storeCellCountY"
	      		autoUpdate = {false}
	      		change = {(e) => this.storeGridDimensions(e)}
	      		changeBtn = {(e) => this.updateGridDimensions(e)}
	      	/>
	      	<DimensionsSelect 
	      		label = {"Cell Dimensions"}
	      		units = {"px"}
	      		valX = {this.state.cellWidth}
	      		valY = {this.state.cellHeight}
	      		nameX = "cellWidth"
	      		nameY = "cellHeight"
	      		autoUpdate = {true}
	      		change = {(e) => this.updateCellDimensions(e)}
	      	/>

	      	<ColorList 
	      		colorList = {this.state.colors}
	      		addColor = {(e) => this.addColor(e)}
	      		removeColor = {(e) => this.removeColor(e)}
	      		updateActiveColor ={(e) => this.updateActiveColor(e)}
	      		activeColor = {this.state.activeColor}
	      	/>

	      	<StyleOutput 
	      		style = {this.generateCSS()}
	      	/>
	      </div>
	    </div>
	  ); 
	}
}

export default QuiltGrid;
