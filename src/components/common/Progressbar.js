import React from 'react';
import * as Styled from './Progressbar.style';

const Progressbar = ({ percentage = 0 }) => {
  console.log(percentage);
  return (
    <Styled.TotalBar>
      <Styled.StatusBar percentage={percentage} />
    </Styled.TotalBar>
  );
};

export default Progressbar;
