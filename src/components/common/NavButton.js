import React from 'react';
import * as Styled from './NavButton.style';
import Button from '../common/Button';

const NewLabelButton = ({ buttonTitle, handleClick }) => {
  return (
    <Styled.ButtonContainer onClick={handleClick}>
      <Button buttonTitle={buttonTitle} isPrimary={true} />
    </Styled.ButtonContainer>
  );
};

export default NewLabelButton;
