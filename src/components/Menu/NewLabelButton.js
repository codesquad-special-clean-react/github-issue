import styled from 'styled-components';

const NewLabelButton = ({ newLabel, setNewLabel }) => {
  const openNewLabel = () => setNewLabel(!newLabel);

  return <Button onClick={openNewLabel}>New label</Button>;
};

const Button = styled.button`
  cursor: pointer;
`;

export default NewLabelButton;
