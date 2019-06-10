import React, {Component} from 'react';
import DimensionsSelectAuto from './DimensionsSelectAuto';
import DimensionsSelectClick from './DimensionsSelectClick';
import './style/DimensionsSelect.css';

class DimensionsSelect extends Component {
  render(){

  	let selectors

  	if (this.props.autoUpdate) {
  		selectors = <DimensionsSelectAuto 
  			valX = {this.props.valX}
  			nameX = {this.props.nameX}
  			valY = {this.props.valY}
  			nameY = {this.props.nameY}
  			units = {this.props.units}
  			change = {(e) => this.props.change(e)}
  		/>
		} else {
			selectors = <DimensionsSelectClick 
				valX = {this.props.valX}
  			nameX = {this.props.nameX}
  			valY = {this.props.valY}
  			nameY = {this.props.nameY}
  			units = {this.props.units}
  			change = {(e) => this.props.change(e)}
  			changeBtn = {(e) => this.props.changeBtn(e)}
			/>
		}

  	return (
	    <div className="dimensionsSelect">
	      <h2 className="dimensionLabel">{this.props.label}</h2>

	      {selectors}

	    </div>
	  );
  }
}

export default DimensionsSelect;
