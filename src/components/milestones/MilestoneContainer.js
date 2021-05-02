import React from 'react';
import MilestoneList from './MilestoneList';
import Container from '../common/Container';

const MilestonesContainer = () => {
  const handleNewMilestoneButtonClick = () => {};

  return (
    <Container
      buttonTitle="New milestone"
      handleClick={handleNewMilestoneButtonClick}
    >
      <MilestoneList />
    </Container>
  );
};

export default MilestonesContainer;
