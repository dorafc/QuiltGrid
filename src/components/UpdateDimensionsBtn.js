import React, {Component} from 'react';

class updateDimensionsBtn extends Component {
  render(){
    return (
    	<button 
    		className="updateBtn"
      	type="button"
      	onClick={(e) => this.props.onClick(e)}
      >
      	Update
    	</button>
    )
  }
}

export default updateDimensionsBtn;