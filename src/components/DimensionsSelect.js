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
		      	value={this.props.valX} 
		      	onChange={(e) => this.props.change(e)}
		      	name = {this.props.nameX}
		      />
		      <label for="x-dimension"> X{this.props.units} </label>

		      <p className="dimesionsSeperator">by</p>

		      <input 
		      	type="text" 
		      	value={this.props.valY} 
		      	onChange={(e) => this.props.change(e)}
		      	name = {this.props.nameY}
		      />
		      <label for="y-dimension"> Y{this.props.units} </label>
	      </div>

	    </div>
	  );
  }
}

export default DimensionsSelect;
