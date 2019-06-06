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

	// update state based on input
	updateInputChange(event){
		this.setState({
			[event.target.name] : event.target.value
		})
	}

	render(){
		// style for the grid output
		const gridDimensions = this.calcGrid()

		return (
	    <div className="QuiltGrid">
	    	<div className="gridEditor">
		      <div 
		      	className="grid"
		      	style={gridDimensions}
		      >
		      	<Cell 
		      		colorCount = {this.state.colorCounters[0]}
		      		changeColor = {() => this.changeColor(0)}
		      	/>
		      	<Cell 
		      		colorCount = {this.state.colorCounters[1]}
		      		changeColor = {() => this.changeColor(1)}
		      	/>
		      	<Cell 
		      		colorCount = {this.state.colorCounters[2]}
		      		changeColor = {() => this.changeColor(2)}
		      	/>
		      	<Cell 
		      		colorCount = {this.state.colorCounters[3]}
		      		changeColor = {() => this.changeColor(3)}
		      	/>
		      </div>
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
