import React from 'react';
import styled from 'styled-components';

const LabelForm = ({ isLabelFormOpen }) => {
  if (!isLabelFormOpen) return <></>;
  return (
    <div>
      <LabelTitle>Label preview</LabelTitle>
    </div>
  );
};

const LabelTitle = styled.h4``;

export default LabelForm;
