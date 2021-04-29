import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { tabs } from '../../utils/constant';
import Tab from './Tab';
import { container } from './TabContainer.module.scss';

const TabContainer = () => {
  const { appState } = useContext(AppContext);
  const { selectedTab } = appState;
  const tabNames = Object.values(tabs);

  return (
    <div className={container}>
      {tabNames.map((tabName) => (
        <Tab
          key={tabName}
          tabName={tabName}
          isSelected={tabName === selectedTab}
        />
      ))}
    </div>
  );
};

export default TabContainer;
