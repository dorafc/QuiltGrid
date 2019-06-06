import React, {Component} from 'react';
import './style/DimensionsSelect.css';

class DimensionsSelect extends Component {
  render(){
  	return (
	    <div className="dimensionsSelect">
	      <h2 className="dimensionLabel">{this.props.label}</h2>

	      <div className="dimensions">
		      <input type="text" name="x-dimension" />
		      <label for="x-dimension"> {this.props.units} </label>

		      <p class="dimesionsSeperator">by</p>

		      <input type="text" name="y-dimension" />
		      <label for="y-dimension"> {this.props.units} </label>
	      </div>

	    </div>
	  );
  }
}

export default DimensionsSelect;
