import React from 'react';
import { LabelIcon, MilestonesIcon } from '../assets/icons';
import { tab_button, select } from './Tab.module.scss';

const Tab = ({ tabName, isSelected }) => {
  let tabIcon;
  if (tabName === 'Labels') {
    tabIcon = <LabelIcon isSelected={isSelected} />;
  } else if (tabName === 'Milestones') {
    tabIcon = <MilestonesIcon isSelected={isSelected} />;
  }

  return (
    <div className={`${tab_button} ${isSelected ? select : ''}`}>
      <span>{tabIcon}</span>
      <span>{tabName}</span>
    </div>
  );
};

export default Tab;
