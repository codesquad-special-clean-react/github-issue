import React from 'react';
import styled from "styled-components";
import LabelItem from "./LabelItem";

const LabelList = () => {
  const count = 0;
  const labels = [{ name: "bug", description: "Something isn't working", color: "#bfd4f2" }];

  return (
      <>
        <LabelListHeader>{count} Labels</LabelListHeader>
        {labels && labels.map(label => <LabelItem label={label}/>)}
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
