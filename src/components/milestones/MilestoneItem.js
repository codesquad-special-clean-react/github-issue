import React, { useContext } from 'react';
import { CalendarIcon } from '../../assets/icons';
import Progressbar from '../common/Progressbar';
import * as Styled from './MilestoneItem.style';
import color from '../../utils/color';
import { requestDeleteMilestone } from '../../utils/api';
import { MilestoneContext } from '../../context/MilestoneContext';

const MilestoneItem = ({ milestone }) => {
  const { id, title, date, description, totalCount, doneCount } = milestone;
  const { dispatch } = useContext(MilestoneContext);

  const getPercentage = () =>
    !totalCount ? 0 : Math.round((doneCount / totalCount) * 100);

  const handleDeleteMilestone = async () => {
    await requestDeleteMilestone(id);
    dispatch({ type: 'REMOVE_MILESTONE', payload: { id } });
  };

  return (
    <tr>
      <Styled.Td>
        <Styled.H2>{title}</Styled.H2>
        <Styled.DateContainer>
          <CalendarIcon />
          <span>{date ? `Due by ${date}` : 'No due date'}</span>
        </Styled.DateContainer>
        <div>{description}</div>
      </Styled.Td>
      <Styled.Td>
        <Progressbar percentage={getPercentage()} />
        <div>
          <Styled.Span>{getPercentage()}% complete</Styled.Span>
          <Styled.Span>{totalCount - doneCount} open</Styled.Span>
          <Styled.Span>{doneCount} done</Styled.Span>
        </div>
        <div>
          <Styled.Button color={color.blue}>Edit</Styled.Button>
          <Styled.Button color={color.blue}>Cancel</Styled.Button>
          <Styled.Button color={color.red} onClick={handleDeleteMilestone}>
            Remove
          </Styled.Button>
        </div>
      </Styled.Td>
    </tr>
  );
};

export default MilestoneItem;
