import React from 'react';
import Button from '../common/Button';
import { container } from './NavButton.module.scss';

const NavButton = () => {
  return (
    <div className={container}>
      <Button text="New Label" />
    </div>
  );
};

export default NavButton;
