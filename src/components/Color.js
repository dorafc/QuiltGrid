import React, {Component} from 'react';
import RemoveColor from './RemoveColor';
import './style/Color.css';

class Color extends Component{
  render(){
  	const styleColor = this.props.color;
  	
  	return (
      <div className="Color">
        <p style={{color: styleColor}}>{this.props.color}</p>
        <RemoveColor />
      </div>
    );
  }
}

export default Color;
