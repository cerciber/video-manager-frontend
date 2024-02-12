import React from 'react';
import './ProgressBar.css';

function ProgressBar({ percentage, type }) {
  return (
    <div className="progress-bar">
      <div className="progress-bar__inner" style={{ width: `${percentage}%` }}></div>
    </div>
  );
}

export default ProgressBar;