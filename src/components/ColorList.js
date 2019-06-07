import React, {Component} from 'react';
import Color from './Color';
import AddColor from './AddColor';
import './style/ColorList.css';

class ColorList extends Component {

	renderColorList(){
		const colors = this.props.colorList.map((color) => 
			<li key = {color}>
				<Color 
					color = {color}
				/>
			</li>
		)

		return colors
	}

	render(){
		return (
	    <div className="ColorList">
	    	<h2>Colors</h2>
	      <ul>
			    {this.renderColorList()}
	      </ul>
	      <AddColor 
	      	addColor = {(e) => this.props.addColor(e)}
	      />
	    </div>

	  );
	}
}

export default ColorList;
