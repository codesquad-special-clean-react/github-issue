import React from 'react'
import { NavBtn, NavWrap } from './Nav.style'
import { NAV_TITLE, NEW_BTN_LABEL } from '@utils/constant'

const Nav = ({openCreateForm, onClickNav, navTitle}) => {
  const handleClickNavBtn = ({target: {name}}) => {
    onClickNav(name)
  }
  return (
    <NavWrap>
      <div>
        <NavBtn onClick={handleClickNavBtn} name='label' navTitle={navTitle}>{NAV_TITLE.LABELS}</NavBtn>
        <NavBtn onClick={handleClickNavBtn} name='milestone' navTitle={navTitle}>{NAV_TITLE.MILESTONES}</NavBtn>
      </div>
      <button onClick={openCreateForm}>{NEW_BTN_LABEL[navTitle]}</button>
    </NavWrap>
  );
};

export default Nav;
