import React from 'react';
import { nav } from './Navigation.module.scss';
import NavButton from './NavButton';
import TabContainer from './TabContainer';

const Navigation = () => {
  return (
    <div className={nav}>
      <TabContainer />
      <NavButton />
    </div>
  );
};

export default Navigation;
