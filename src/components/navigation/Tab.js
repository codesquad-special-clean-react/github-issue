import React from 'react';
import { TAB_LABEL, TAB_MILESTONES } from '../../utils/constant';
import { LabelIcon, MilestonesIcon } from '../../assets/icons';
import { tab_button, select } from './Tab.module.scss';

const Tab = ({ tabName, isSelected }) => {
  const TabIcon = (() => {
    switch (tabName) {
      case TAB_LABEL:
        return <LabelIcon isSelected={isSelected} />;
      case TAB_MILESTONES:
        return <MilestonesIcon isSelected={isSelected} />;
      default:
        throw new Error('Any tab is selected');
    }
  })();

  return (
    <div className={`${tab_button} ${isSelected ? select : ''}`}>
      <span>{TabIcon}</span>
      <span>{tabName}</span>
    </div>
  );
};

export default Tab;
