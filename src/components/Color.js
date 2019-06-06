import React, {Component} from 'react';
import RemoveColor from './RemoveColor';
import './style/Color.css';

class Color extends Component{
  render(){
  	return (
      <div className="Color">
        <p>Color</p>
        <RemoveColor />
      </div>
    );
  }
}

export default Color;
