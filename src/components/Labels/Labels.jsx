import React, { useContext, useEffect } from "react";
import styled from "styled-components";

import LabelFetch from "@service/LabelFetch.js";
import { LabelsContext, setLabels } from "@reducer/labelReducer";
import LabelItem from "./LabelItem";
import LabelHead from "./LabelHead";

const Labels = () => {
  const { labels, labelsDispatch } = useContext(LabelsContext);

  useEffect(() => {
    const fetchData = async () => {
      const labelList = await LabelFetch.read();
      labelsDispatch(setLabels(labelList));
    };

    fetchData();
  }, [labelsDispatch]);

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
