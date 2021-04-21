import React from "react";
import styled from "styled-components";

import LabelHead from "./LabelHead";

const Labels = () => {
  return (
    <LabelsWrapper>
      <LabelHead />
    </LabelsWrapper>
  );
};

const LabelsWrapper = styled.div`
  margin-top: 1em;
  border: 2px solid #f1f3f5;
`;

export default Labels;
