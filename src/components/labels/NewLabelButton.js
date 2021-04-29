import React, { useContext } from 'react';
import * as Styled from './NewLabelButton.style';
import { LabelContext } from '../../context/LabelContext';
import Button from '../common/Button';

const NewLabelButton = () => {
  const { dispatch } = useContext(LabelContext);

  const handleClick = () => {
    dispatch({ type: 'OPEN_LABEL_FORM' });
  };

  return (
    <Styled.ButtonContainer onClick={handleClick}>
      <Button text="New Label" isPrimary={true} />
    </Styled.ButtonContainer>
  );
};

export default NewLabelButton;
