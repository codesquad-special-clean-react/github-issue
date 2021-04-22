import React from 'react';
import { tabs } from '../utils/constant';
import Tab from './Tab';

const TabContainer = ({ selectedTab }) => {
  const tabNames = Object.values(tabs);
  console.log(selectedTab);

  return (
    <div className="tab_container">
      {tabNames.map((tabName) => (
        <Tab tabName={tabName} isSelected={tabName === selectedTab} />
      ))}
    </div>
  );
};

export default TabContainer;
