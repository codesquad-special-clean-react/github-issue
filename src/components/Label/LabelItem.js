import React from 'react';
import styled from 'styled-components';

const LabelItem = ({ color: { fontColor, bgColor }, name }) => {
  return (
    <LabelItemBlock fontColor={fontColor} bgColor={bgColor}>
      {name}
    </LabelItemBlock>
  );
};

const LabelItemBlock = styled.strong`
  padding: 5px 7px;
  background-color: ${props => props.bgColor || ''};
  color: ${props => props.fontColor || ''};
`;

export default LabelItem;
