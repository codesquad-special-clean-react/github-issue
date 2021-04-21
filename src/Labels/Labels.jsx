import React, { useEffect, useState } from "react";
import styled from "styled-components";

import LabelHead from "./LabelHead";
import LabelItem from "./LabelItem";

const Labels = () => {
  const [labels, setLabels] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/labels")
      .then((res) => res.json())
      .then((datas) => setLabels(datas));
  }, []);

  const labelList = labels.map((label) => (
    <LabelItem key={label.id} label={label} />
  ));

  return (
    <LabelsWrapper>
      <LabelHead labels={labels} />
      <ul>{labelList}</ul>
    </LabelsWrapper>
  );
};

const LabelsWrapper = styled.div`
  margin-top: 1em;
  border: 2px solid #f1f3f5;
`;

export default Labels;
