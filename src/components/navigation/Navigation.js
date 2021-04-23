import React from 'react';
import { nav } from './Navigation.module.scss';
import NewLabelButton from './NewLabelButton';
import TabContainer from './TabContainer';

const Navigation = ({ selectedTab }) => {
  return (
    <div className={nav}>
      <TabContainer selectedTab={selectedTab} />
      <NewLabelButton />
    </div>
  );
};

export default Navigation;
