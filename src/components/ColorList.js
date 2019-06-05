import React from 'react';
import Color from './Color';
import AddColor from './AddColor';
import './style/ColorList.css';

function ColorList() {
  return (
    <div className="ColorList">
    	<h2>Colors</h2>
      <ul>
		    <li><Color /></li>
		    <li><Color /></li>
		    <li><Color /></li>
		    <li><Color /></li>
      </ul>
      <AddColor />
    </div>

  );
}

export default ColorList;
