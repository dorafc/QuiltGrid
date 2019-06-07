import React, {Component} from 'react';
import './style/StyleOutput.css';

class StyleOutput extends Component{

	render(){
		return (
      <div className="StyleOutput">
      	<textarea value={this.props.style} readOnly />
      </div>
    );
	}
}

export default StyleOutput;
