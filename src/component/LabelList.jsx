import React from 'react';
import styled from "styled-components";

const LabelList = () => {
  const count = 0;

  return (
      <>
        <LabelListHeader>{count} Labels</LabelListHeader>
      </>
  );
};

const LabelListHeader = styled.div`
margin-top: 2em;
padding: 1.5em;
background-color:#F5F8FA;
border: 1px solid #CCC;
`

export default LabelList;
