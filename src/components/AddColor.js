import React, {Component} from 'react';
import './style/AddColor.css';

class AddColor extends Component {
	constructor(props) {
    super(props);
    this.state = {
    	value : "Add Color",
    	textColor : "#000"
    }
    this.storeColor = this.storeColor.bind(this)
    this.clearColor = this.clearColor.bind(this)
    this.inputText = this.inputText.bind(this)
  }

  storeColor(event){
  	this.setState({
  		value : event.target.value,
  		textColor : event.target.value
  	})
  }

  clearColor(event){
  	this.props.addColor(this.state.value)
  	this.setState({
  		value : "Add Color",
  		textColor : "#000"
  	})
  }

  inputText(event){
  	if (this.state.value === "Add Color"){
	  	this.setState({
	  		value : ""
	  	})
  	}
  }

	render(){
	  return (
	    <div className="AddColor">
	    	<input 
	    		type="text" 
	    		value={this.state.value} 
	    		onChange={this.storeColor}
	    		onClick={this.inputText}
	    		style={{color:this.state.textColor}}
	    	/>
	      <button 
	      	className="addColor" 
	      	type="button" 
	      	onClick={this.clearColor}
      	>
		    	Add
		  	</button>
	    </div>
	  );
	}
}

export default AddColor;
