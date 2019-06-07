import React, {Component} from 'react';
import Color from './Color';
import AddColor from './AddColor';
import './style/ColorList.css';

class ColorList extends Component {

	renderColorList(){
		const colors = this.props.colorList.map((color, i) => 
			<li key = {color + i}>
				<Color 
					color = {color}
					removeColor = {(e) => this.props.removeColor(e)}
					updateActiveColor ={() => this.props.updateActiveColor(color)}
					active = {(this.props.activeColor === color)}
				/>
			</li>
		)

		return colors
	}

	render(){
		return (
	    <div className="ColorList">
	    	<h2>Color Palette</h2>
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
