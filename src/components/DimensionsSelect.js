import React, {Component} from 'react';
import './style/DimensionsSelect.css';

class DimensionsSelect extends Component {
  render(){
  	return (
	    <div className="dimensionsSelect">
	      <h2 className="dimensionLabel">{this.props.label}</h2>

	      <div className="dimensions">
		      <input 
		      	type="text" 
		      	value={this.props.cellCountX} 
		      	onChange={(e) => this.props.change(e)}
		      	name = "cellCountX"
		      />
		      <label for="x-dimension"> {this.props.units} </label>

		      <p className="dimesionsSeperator">by</p>

		      <input 
		      	type="text" 
		      	value={this.props.cellCountY} 
		      	onChange={(e) => this.props.change(e)}
		      	name = "cellCountY"
		      />
		      <label for="y-dimension"> {this.props.units} </label>
	      </div>

	    </div>
	  );
  }
}

export default DimensionsSelect;
