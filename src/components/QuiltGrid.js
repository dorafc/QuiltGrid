import React from 'react';
import Cell from './Cell';
import DimensionsSelect from './DimensionsSelect';
import ColorList from './ColorList';
import StyleOutput from './StyleOutput';
import './style/QuiltGrid.css';

function QuiltGrid() {
  return (
    <div className="QuiltGrid">
    	<div className="gridEditor">
	      <div className="grid">
	      	<Cell />
	      	<Cell />
	      	<Cell />
	      	<Cell />
	      </div>
      </div>

      <div className="userInput">
      	<DimensionsSelect />
      	<DimensionsSelect />

      	<ColorList />

      	<StyleOutput />
      </div>
    </div>
  );
}

export default QuiltGrid;
