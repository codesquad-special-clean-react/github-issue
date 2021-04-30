import React from 'react';
import * as Styled from './TableContainer.style';

const TableContainer = ({ children }) => {
  return <Styled.Table>{children}</Styled.Table>;
};

export default TableContainer;
