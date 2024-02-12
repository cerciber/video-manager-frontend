import React, { useState } from 'react';
import Label from '../../atoms/Label/Label';
import Icon from '../../atoms/Icon/Icon';
import './Tabbed.css';

function Tabbed({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="tabbed">
      <div className="tabbed__tab-bar">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tabbed__tab ${index === activeTab ? 'active' : ''}`}
            onClick={() => handleTabClick(index)}
          >
            <Icon icon={tab.icon} type={'tab'} />
            <Label text={tab.label} type={'item'} />
          </div>
        ))}
      </div>
      <div className="tabbed__content">
        {tabs[activeTab].content}
      </div>
    </div>
  );
}

export default Tabbed;