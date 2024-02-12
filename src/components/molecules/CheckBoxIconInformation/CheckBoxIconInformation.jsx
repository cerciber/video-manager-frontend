import React from 'react';
import Icon from '../../atoms/Icon/Icon';
import CheckBox from '../../atoms/CheckBox/CheckBox';
import Label from '../../atoms/Label/Label';
import './CheckBoxIconInformation.css';

function CheckBoxIconInformation({ icon, text, type }) {
  return (
    <div className={`checkbox-information checkbox-information--${type}`}>
      <CheckBox type={'default'} />
      {icon && <Icon icon={icon} type={'table'} />}
      <Label text={text} type={type} />
    </div>
  );
}

export default CheckBoxIconInformation;