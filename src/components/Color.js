import React, {Component} from 'react';
import RemoveColor from './RemoveColor';
import './style/Color.css';

class Color extends Component{
  render(){
  	const styleColor = this.props.color;
  	const isActive = this.props.active ? "active Color" : "Color"

  	return (
  		<div className="">
	      <div 
	      	className={isActive}
	      	style={{backgroundColor: styleColor}}
	      	onClick={this.props.updateActiveColor}
	      ></div>
	      <RemoveColor
	      	removeColor = {() => this.props.removeColor(this.props.color)}
	      />
      </div>
    );
  }
}

export default Color;
