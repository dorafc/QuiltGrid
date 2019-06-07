import React, {Component} from 'react';
import './style/AddColor.css';

class AddColor extends Component {
	constructor(props) {
    super(props);
    this.state = {
    	value : "Add Color"
    }
    this.storeColor = this.storeColor.bind(this)
    this.clearColor = this.clearColor.bind(this)
  }

  storeColor(event){
  	this.setState({
  		value : event.target.value
  	})
  }

  clearColor(event){
  	this.props.addColor(event.target.value)
  	this.setState({
  		value : "Add Color"
  	})
  	this.preventDefault(event)
  }

	render(){
	  return (
	    <div className="AddColor">
	    	<input 
	    		type="text" 
	    		value={this.state.value} 
	    		onChange={this.storeColor}
	    		style={{color:this.state.value}}
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
