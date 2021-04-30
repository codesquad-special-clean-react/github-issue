import React from 'react';
import * as Styled from './Button.style';

const Button = ({ buttonTitle, isPrimary = false, isDisabled = false }) => {
  return (
    <Styled.Button
      type="button"
      isPrimary={isPrimary}
      isDisabled={isDisabled}
      disabled={isDisabled}
    >
      {buttonTitle}
    </Styled.Button>
  );
};

export default Button;
