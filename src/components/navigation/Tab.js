import React, { useContext } from 'react';
import { TAB_LABEL, TAB_MILESTONES } from '../../utils/constant';
import { LabelIcon, MilestonesIcon } from '../../assets/icons';
import { tab_button, select } from './Tab.module.scss';
import { AppContext } from '../../context/AppContext';

const Tab = ({ tabName, isSelected }) => {
  const { dispatch } = useContext(AppContext);

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

  const handleClick = () => {
    switch (tabName) {
      case TAB_LABEL:
        dispatch({ type: 'SELECT_LABEL_TAB' });
        break;
      case TAB_MILESTONES:
        dispatch({ type: 'SELECT_MILESTONE_TAB' });
        break;
      default:
        throw new Error('Any tab is selected');
    }
  };

  return (
    <div
      className={`${tab_button} ${isSelected ? select : ''}`}
      onClick={handleClick}
    >
      <span>{TabIcon}</span>
      <span>{tabName}</span>
    </div>
  );
};

export default Tab;
