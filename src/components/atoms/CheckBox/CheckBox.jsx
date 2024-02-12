import React from 'react';
import './CheckBox.css';

function CheckBox({ type }) {
  return (
    <div type="checkbox" className={`checkbox checkbox--${type}`}>
        <input type="checkbox"/>
    </div>
  );
}

export default CheckBox;