import React from 'react';
import * as Styled from './Container.style';
import NavButton from './NavButton';

const Container = ({ buttonTitle, handleClick, children }) => {
  return (
    <Styled.Container>
      <NavButton buttonTitle={buttonTitle} handleClick={handleClick} />
      {children}
    </Styled.Container>
  );
};

export default Container;
