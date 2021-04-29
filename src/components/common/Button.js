import React from 'react';
import * as Styled from './Button.style';

const Button = ({ text, isPrimary = false, isDisabled = false }) => {
  return (
    <Styled.Button
      type="button"
      isPrimary={isPrimary}
      isDisabled={isDisabled}
      disabled={isDisabled}
    >
      {text}
    </Styled.Button>
  );
};

export default Button;
