import React from 'react';
import './CheckBox.css';

function CheckBox({ type }) {
  const handleCheckboxClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div type="checkbox" className={`checkbox checkbox--${type}`} onClick={handleCheckboxClick}>
        <input type="checkbox"/>
    </div>
  );
}

export default CheckBox;