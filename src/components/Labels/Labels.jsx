import React, { useEffect } from "react";
import styled from "styled-components";

import LabelHead from "./LabelHead";
import LabelItem from "./LabelItem";
import { getLabels } from "../../service/LabelRepository";

const Labels = ({ labels, setLabels }) => {
  useEffect(() => {
    const fetchData = async () => {
      const datas = await getLabels();
      setLabels(datas);
    };
    fetchData();
  }, [setLabels]);

  const handleDelete = (id) => {
    setLabels(labels.filter((label) => label.id !== id));
  };

  const labelList = labels.map((label) => (
    <LabelItem key={label.id} label={label} handleDelete={handleDelete} />
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
