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
    	colorCounters: [0, 1, 2, 3]
    };
  }

	// click function for the color cell
	changeColor(i){
		let colorCounters = this.state.colorCounters.slice()
		colorCounters[i] = colorCounters[i] + 1

		this.setState({colorCounters : colorCounters})
	}

	render(){
		return (
	    <div className="QuiltGrid">
	    	<div className="gridEditor">
		      <div className="grid">
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
