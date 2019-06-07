import React, { Component } from 'react';
import './style/Cell.css';

class Cell extends Component {
	render(){
		// const colors = this.props.colors
		const bgColor = this.props.color
		const styleHeight = this.props.height + 'px'
		const styleWidth = this.props.width + 'px'
		// const dimensions = height: this.props.height + 'px', width: this.props.width + 'px'

	  return (
	    <div 
	    	className="Cell" 
	    	style={{backgroundColor: bgColor, height: styleHeight, width: styleWidth}}
	    	onClick={() => this.props.changeColor()}
	    >
	    </div>
	  )
	}
}

export default Cell;
