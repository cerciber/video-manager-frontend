import React from 'react';
import './ProgressBar.css';

function ProgressBar({ percentage, type }) {
  return (
    <div className={`progress-bar progress-bar--${type}`} >
      <div className="progress-bar__inner" style={{ width: `${percentage}%` }}></div>
    </div>
  );
}

export default ProgressBar;