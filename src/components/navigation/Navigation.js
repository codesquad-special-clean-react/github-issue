import React from 'react';
import { nav } from './Navigation.module.scss';
import TabContainer from './TabContainer';

const Navigation = () => {
  return (
    <div className={nav}>
      <TabContainer />
    </div>
  );
};

export default Navigation;
