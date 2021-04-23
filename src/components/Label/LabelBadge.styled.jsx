import styled from 'styled-components';

const LabelBadge = ({ color, name }) => {
  return (
    <Badge color={color}>
      <span>{name}</span>
    </Badge>
  );
};

const Badge = styled.div`
  span {
    color: white;
    background-color: ${({ color }) => color};
    padding: 4px 6px;
    border-radius: 5px;
  }
`;
export default LabelBadge;
