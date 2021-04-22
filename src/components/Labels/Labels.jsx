import React, { useEffect } from "react";
import styled from "styled-components";

import LabelHead from "./LabelHead";
import LabelItem from "./LabelItem";
import LabelFetch from "../../service/LabelFetch.js";

const Labels = ({ labels, setLabels, updateLabel, deleteLabel }) => {
  useEffect(() => {
    const fetchData = async () => {
      const datas = await LabelFetch.read();
      setLabels(datas);
    };
    fetchData();
  }, [setLabels]);

  const labelList = labels.map((label) => (
    <LabelItem
      key={label.id}
      label={label}
      updateLabel={updateLabel}
      deleteLabel={deleteLabel}
    />
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
