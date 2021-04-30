import React, { useContext } from 'react';
import * as Styled from './MilestoneListContainer.style';
import { MilestoneContext } from '../../context/MilestoneContext';
import TableContainer from '../common/TableContainer';
import MilestoneItem from './MilestoneItem';

const MilestoneContainer = () => {
  const { milestones } = useContext(MilestoneContext);
  const milestonesLength = milestones.length;
  const openMilestoneLenght = milestones.filter(({ isOpen }) => isOpen).length;

  return (
    <TableContainer>
      <thead>
        <tr>
          <Styled.Th>{openMilestoneLenght} Open</Styled.Th>
          <Styled.Th>{milestonesLength - openMilestoneLenght} Closed</Styled.Th>
        </tr>
      </thead>
      <tbody>
        {milestones.map((milestone) => (
          <MilestoneItem key={milestone.id} milestone={milestone} />
        ))}
      </tbody>
    </TableContainer>
  );
};

export default MilestoneContainer;
