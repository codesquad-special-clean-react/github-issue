import React, { useState } from 'react'
import { MainWrap } from '../../App.style'
import Milestones from '../Milestones/Milestones'
import Labels from '../Labels/Labels'
import Nav from '../Nav/Nav'

const Content = () => {
  const [navTitle, setNavTitle] = useState('label')
  const [isShowForm, setIsShowForm] = useState(false)


  const onClickNav = (title) => {
    setNavTitle(() => title)
    setIsShowForm(() => false)
  }

  const onToggleNewContent = () => {
    setIsShowForm(() => !isShowForm)
  }

  const Content = {
    'label' :  (<Labels isShowForm={isShowForm} toggleForm={onToggleNewContent}/>),
    'milestone' : (<Milestones isShowForm={isShowForm}  toggleForm={onToggleNewContent} />)
  }

  return (
    <MainWrap>
      <Nav openCreateForm={onToggleNewContent} onClickNav={onClickNav} navTitle={navTitle}/>
      {Content[navTitle]}
    </MainWrap>
  );
};

export default Content;
