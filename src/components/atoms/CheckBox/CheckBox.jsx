import React from 'react';
import './CheckBox.css';

function CheckBox({ type }) {
  return (
    <div className={`checkbox checkbox--${type}`}>
      <label>
        <input type="checkbox"/>
      </label>
    </div>
  );
}

export default CheckBox;