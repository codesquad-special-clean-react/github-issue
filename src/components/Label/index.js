import React from 'react';
import { LabelWrapper, LabelBlock, Desc, Edit, Delete } from './index.styles';
import LabelItem from './LabelItem';

const Label = ({ Item }) => {
  const { id, name, color, desc } = Item;

  return (
    <LabelWrapper key={`label${id}`}>
      <LabelBlock>
        <LabelItem name={name} color={color} />
      </LabelBlock>
      <Desc>{desc}</Desc>
      <Edit>Edit</Edit>
      <Delete>Delete</Delete>
    </LabelWrapper>
  );
};

export default Label;
