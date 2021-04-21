import React from "react";
import styled from "styled-components";

import LabelHead from "./LabelHead";
import LabelItem from "./LabelItem";

const Labels = () => {
  return (
    <LabelsWrapper>
      <LabelHead />
      <ul>
        <LabelItem />
        <LabelItem />
        <LabelItem />
        <LabelItem />
        <LabelItem />
      </ul>
    </LabelsWrapper>
  );
};

const LabelsWrapper = styled.div`
  margin-top: 1em;
  border: 2px solid #f1f3f5;
`;

export default Labels;
