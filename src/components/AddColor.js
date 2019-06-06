import React from 'react';
import './style/AddColor.css';

function AddColor() {
  return (
    <div className="AddColor">
    	<input type="text" value="Add Color"/>
      <button className="addColor" type="button">
	    	Add
	  	</button>
    </div>
  );
}

export default AddColor;
