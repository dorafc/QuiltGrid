import React, {Component} from 'react';
import UpdateDimensionsBtn from './UpdateDimensionsBtn';
import './style/DimensionsSelect.css';

class DimensionsSelectClick extends Component {
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
		      <label> X{this.props.units} </label>

		      <p className="dimesionsSeperator">by</p>

		      <input 
		      	type="text" 
		      	value={this.props.valY} 
		      	onChange={(e) => this.props.change(e)}
		      	name = {this.props.nameY}
		      />
		      <label> Y{this.props.units} </label>
	      </div>

	      <UpdateDimensionsBtn 
	      	onClick = {(e) => this.props.changeBtn(e)}
	      />

	    </div>
	  );
  }
}

export default DimensionsSelectClick;
