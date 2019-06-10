import React, {Component} from 'react';
import './style/DimensionsSelect.css';

class DimensionsSelectAuto extends Component {
  render(){
  	return (

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
	  );
  }
}

export default DimensionsSelectAuto;
