import React from 'react';
import { BookIcon } from '../../assets/icons/index';
import { header } from './Header.module.scss';

const Header = () => {
  return (
    <div className={header}>
      <div>
        <BookIcon />
      </div>
      <div>ISSUE</div>
    </div>
  );
};

export default Header;
