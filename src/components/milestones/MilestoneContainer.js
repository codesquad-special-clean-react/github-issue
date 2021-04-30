import React from 'react';
import MilestoneListContainer from './MilestoneListContainer';
import Container from '../common/Container';

const MilestonesContainer = () => {
  const handleNewMilestoneButtonClick = () => {};

  return (
    <Container
      buttonTitle="New milestone"
      handleClick={handleNewMilestoneButtonClick}
    >
      <MilestoneListContainer />
    </Container>
  );
};

export default MilestonesContainer;
