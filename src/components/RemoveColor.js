import React, {Component} from 'react';
// import './App.css';

class RemoveColor extends Component {
  render(){
    return (
      <button 
      	className="RemoveColor" 
      	type="button"
      	onClick={() => this.props.removeColor()}
      >
      	-
    	</button>
    );
  }
}

export default RemoveColor;
