import { StyledTextButton } from 'components';
import styled from 'styled-components';
import LabelBadge from './LabelBadge.styled';

const LabelItem = ({ label }) => (
  <LabelBlock key={label.name}>
    <LabelBadge color={label.color} name={label.name} />
    <Description>{label.description}</Description>
    <ConfigButtons>
      <StyledTextButton>Edit</StyledTextButton>
      <StyledTextButton>Delete</StyledTextButton>
    </ConfigButtons>
  </LabelBlock>
);

const LabelBlock = styled.li`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 21px;
  padding: 16px;
`;

const Description = styled.div``;

const ConfigButtons = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default LabelItem;
