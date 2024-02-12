import React from 'react';
import Label from '../../atoms/Label/Label';
import ProgressBar from '../../atoms/ProgressBar/ProgressBar';
import './ProgressInformation.css';

function ProgressInformation({ message, currentValue, totalValue, unit, type }) {
  return (
    <div className={`progress-information progress-information--${type}`}>
      <div className="labels-container">
        <Label text={message} type={'short'} />
        <Label text={`${currentValue} ${unit}/${totalValue} ${unit}`} type={'more-short'} />
      </div>
      <ProgressBar percentage={currentValue * 100 / totalValue} type={'default'} className="progress-information__progressbar" />
    </div>
  );
}

export default ProgressInformation;