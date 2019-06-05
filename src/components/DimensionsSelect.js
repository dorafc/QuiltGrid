import React from 'react';
import './style/DimensionsSelect.css';

function DimensionsSelect() {
  return (
    <div className="dimensionsSelect">
      <h2 className="dimensionLabel">DimensionSelect</h2>

      <div className="dimensions">
	      <input type="text" name="x-dimension" />
	      <label for="x-dimension"> X </label>

	      <p class="dimesionsSeperator">by</p>

	      <input type="text" name="y-dimension" />
	      <label for="y-dimension"> Y </label>
      </div>

    </div>
  );
}

export default DimensionsSelect;
