import React, { useContext, useEffect } from "react";
import styled from "styled-components";

import LabelHead from "./LabelHead";
import LabelItem from "./LabelItem";
import LabelFetch from "../../service/LabelFetch.js";
import { LabelsContext, setLabels } from "../../reducer/labelReducer";

// const Labels = ({ labels, setLabels, updateLabel, deleteLabel }) => {
const Labels = () => {
  const { labels, labelsDispatch } = useContext(LabelsContext);

  useEffect(() => {
    const fetchData = async () => {
      const labelList = await LabelFetch.read();
      labelsDispatch(setLabels(labelList));
    };

    fetchData();
  }, []);

  const labelList = labels.map((label) => (
    <LabelItem
      key={label.id}
      label={label}
      // updateLabel={updateLabel}
      // deleteLabel={deleteLabel}
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
