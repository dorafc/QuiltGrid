import React, { Component } from 'react';
import './style/Cell.css';

class Cell extends Component {
	render(){
		const colors = ['darkslategray', 'hotpink', 'limegreen', 'slateblue', 'lightseagreen']
		// const dimensions = height: this.props.height + 'px', width: this.props.width + 'px'

	  return (
	    <div 
	    	className="Cell" 
	    	style={{backgroundColor: colors[this.props.colorCount % colors.length], height: this.props.height + 'px', width: this.props.width + 'px'}}
	    	onClick={() => this.props.changeColor()}
	    >
	    </div>
	  )
	}
}

export default Cell;
