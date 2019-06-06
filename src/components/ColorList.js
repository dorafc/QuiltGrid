import React, {Component} from 'react';
import Color from './Color';
import AddColor from './AddColor';
import './style/ColorList.css';

class ColorList extends Component {
	render(){
		return (
	    <div className="ColorList">
	    	<h2>Colors</h2>
	      <ul>
			    <li><Color /></li>
			    <li><Color /></li>
			    <li><Color /></li>
			    <li><Color /></li>
	      </ul>
	      <AddColor />
	    </div>

	  );
	}
}

export default ColorList;
