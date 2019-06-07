import React, {Component} from 'react';
import RemoveColor from './RemoveColor';
import './style/Color.css';

class Color extends Component{
  render(){
  	const styleColor = this.props.color;

  	return (
      <div className="Color" style={{backgroundColor: styleColor}}>
        <RemoveColor

        	removeColor = {() => this.props.removeColor(this.props.color)}
        />
      </div>
    );
  }
}

export default Color;
