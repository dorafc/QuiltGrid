import React, {Component} from 'react';
// import './style/JSONText.css';

class JSONText extends Component{

	clickBtn(){
		navigator.clipboard.writeText(this.props.jsonData)
	}

	render(){
		return (
      <button 
      	className="JSONText"
      	onClick = {(e) => this.clickBtn(e)}
      > 
      Copy JSON 
      </button>
    );
	}
}

export default JSONText;
