import React from 'react';
import { tabs } from '../../utils/constant';
import Tab from './Tab';
import { container } from './TabContainer.module.scss';

const TabContainer = ({ selectedTab }) => {
  const tabNames = Object.values(tabs);

  return (
    <div className={container}>
      {tabNames.map((tabName) => (
        <Tab tabName={tabName} isSelected={tabName === selectedTab} />
      ))}
    </div>
  );
};

export default TabContainer;
