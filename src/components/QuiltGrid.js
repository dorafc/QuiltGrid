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
    	colorCounters: [[0, 1], [2, 3]],
    	// X --> # of colummns, Y --> # of rows
    	cellCountX: 2,
    	cellCountY: 2,
    	cellHeight: 50,
    	cellWidth: 50,
    	colors: ['darkslategray', 'hotpink', 'limegreen', 'slateblue', 'lightseagreen'],
    };
    this.updateGridDimensions = this.updateGridDimensions.bind(this);
    this.updateCellDimensions = this.updateCellDimensions.bind(this);
  }

	// click function for the color cell
	changeColor(rowNum, i){
		let colorCounters = this.state.colorCounters.slice()
		colorCounters[rowNum][i] = colorCounters[rowNum][i] + 1

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
		// copy of color counters from state
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
	    		colorCount = {this.state.colorCounters[rowNum][i]}
	    		changeColor = {() => this.changeColor(rowNum, i)}
	    		height = {this.state.cellHeight}
	    		width = {this.state.cellWidth}
	    		colors = {this.state.colors}
	    	/>
			)
		)
	}

	// update grid dimensions based on input
	updateGridDimensions(event){
		this.setState({
			[event.target.name] : event.target.value
		}, () => this.updateColorCounter())
	}

	// update cell dimensions based on inpuu
	updateCellDimensions(event){
		this.setState({
			[event.target.name] : event.target.value
		})
	}

	// update color counter to match values in set state
	updateColorCounter(){
		const currentRow = this.state.colorCounters.length
		const currentCol = this.state.colorCounters[0].length
		let colorCounters = this.state.colorCounters.slice()

		// add to every row
		if (this.state.cellCountX > currentCol && this.state.cellCountX !== ''){
			colorCounters.forEach((row) => {
				for (let i = currentCol; i < this.state.cellCountX; i++){
					row.push(0)
				}
			})
		// remove from every row
		}	else if (this.state.cellCountX < currentCol && this.state.cellCountX !== ''){
			colorCounters.forEach((row) => {
				for (let i = this.state.cellCountX; i < currentCol; i++){
					row.pop()
				}
			})
		}

		// add row
		if (this.state.cellCountY > currentRow && this.state.cellCountY !== ''){
			for (let i = currentRow; i < this.state.cellCountY; i++){
					colorCounters.push(Array(colorCounters[0].length).fill(0))
				}
		}
		// remove row
		if (this.state.cellCountY < currentRow && this.state.cellCountY !== ''){
			for (let i = this.state.cellCountY; i < currentRow; i++){
					colorCounters.pop()
				}
		}

		this.setState({colorCounters : colorCounters})
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
	      		valX = {this.state.cellCountX}
	      		valY = {this.state.cellCountY}
	      		nameX = "cellCountX"
	      		nameY = "cellCountY"
	      		change = {(e) => this.updateGridDimensions(e)}
	      	/>
	      	<DimensionsSelect 
	      		label = {"Cell Dimensions"}
	      		units = {"px"}
	      		valX = {this.state.cellWidth}
	      		valY = {this.state.cellHeight}
	      		nameX = "cellWidth"
	      		nameY = "cellHeight"
	      		change = {(e) => this.updateCellDimensions(e)}
	      	/>

	      	<ColorList 
	      		colorList = {this.state.colors}
	      	/>

	      	<StyleOutput />
	      </div>
	    </div>
	  ); 
	}
}

export default QuiltGrid;
