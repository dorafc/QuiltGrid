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
    	colorCounters: [0, 1, 2, 3],
    	cellCountX: 2,
    	cellCountY: 2,
    };
    this.updateInputChange = this.updateInputChange.bind(this);
  }

	// click function for the color cell
	changeColor(i){
		let colorCounters = this.state.colorCounters.slice()
		colorCounters[i] = colorCounters[i] + 1

		this.setState({colorCounters : colorCounters})
	}

	// calculate the height and width of the grid render in px
	calcGrid(){
		const widthDim = (50 * this.state.cellCountX) + (3 * this.state.cellCountX)
		const heightDim = (50 * this.state.cellCountY) + (3 * this.state.cellCountY)

		return {height: heightDim + 'px', width: widthDim + 'px'}
	}

	// out put grid based on form inputs
	renderGrid(){
		// style for the grid output
		const gridDimensions = this.calcGrid()
		// copy of color counters from state
		let gridColors = this.state.colorCounters.slice()

		gridColors = gridColors.map((color, i) => 
			<Cell 
    		colorCount = {this.state.colorCounters[i]}
    		changeColor = {() => this.changeColor(i)}
    	/>
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

	// update state based on input
	updateInputChange(event){
		this.setState({
			[event.target.name] : event.target.value
		})
	}

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
	      		cellCountX = {this.state.cellCountX}
	      		cellCountY = {this.state.cellCountY}
	      		change = {(e) => this.updateInputChange(e)}
	      	/>
	      	<DimensionsSelect 
	      		label = {"Cell Dimensions"}
	      		units = {"px"}
	      	/>

	      	<ColorList />

	      	<StyleOutput />
	      </div>
	    </div>
	  ); 
	}
}

export default QuiltGrid;
