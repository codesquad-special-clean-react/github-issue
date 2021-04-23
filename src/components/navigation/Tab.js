import React from 'react';
import { TAB_LABEL, TAB_MILESTONES } from '../../utils/constant';
import { LabelIcon, MilestonesIcon } from '../../assets/icons';
import { tab_button, select } from './Tab.module.scss';

const Tab = ({ tabName, isSelected }) => {
  let tabIcon;
  if (tabName === TAB_LABEL) {
    tabIcon = <LabelIcon isSelected={isSelected} />;
  } else if (tabName === TAB_MILESTONES) {
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
