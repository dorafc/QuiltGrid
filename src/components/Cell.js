import React, { Component } from 'react';
import './style/Cell.css';

class Cell extends Component {
	render(){
		const colors = ['darkslategray', 'hotpink', 'limegreen', 'slateblue', 'teal']
	  return (
	    <div 
	    	className="Cell" 
	    	style={{backgroundColor: colors[this.props.colorCount % colors.length]}}
	    	onClick={() => this.props.changeColor()}
	    >
	    </div>
	  )
	}
}

export default Cell;
