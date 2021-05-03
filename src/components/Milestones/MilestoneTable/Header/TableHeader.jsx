import React, { useContext } from 'react'
import { Header } from './TableHeader.style'
import { changeNav } from '@store/milestone'
import { MilestonesContext } from '@contexts/MilestoneProviderWrapper'

const getCounts = (acc, {status}) => {
  if (status === 'open') {
    acc['opened'] += 1;
  } else {
    acc['closed'] += 1;
  }
  return acc;
}

const TableHeader = () => {
  const {state : {milestoneData}, dispatch} = useContext(MilestonesContext);
  const {opened, closed} = milestoneData.reduce(getCounts, {opened: 0, closed : 0});
  const handleChangeNav = ({target : {dataset : {nav}}}) => {
    dispatch(changeNav(nav))
  }
  return (
    <Header>
      <div onClick={handleChangeNav} data-nav="open">{opened} Open</div>
      <div onClick={handleChangeNav} data-nav="close">{closed} Closed</div>
    </Header>
  )
}

export default TableHeader
