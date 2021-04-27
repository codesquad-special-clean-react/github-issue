import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getLabels } from '../../service/api';

import LabelList from './LabelList';

const LabelEditor = ({ status }) => {
  const [labelList, setLabelList] = useState(null);

  const fetchLabelList = async () => {
    const data = await getLabels();

    setLabelList(data);
  };

  const { loading, error } = status;

  useEffect(() => {
    fetchLabelList();
  }, [loading]);

  if (loading) return <div>loading...</div>;
  if (error) return <div>error</div>;
  if (!labelList) return null;

  return (
    <LabelEditorBlock>
      <LabelList labelList={labelList} />
    </LabelEditorBlock>
  );
};

export const LabelEditorBlock = styled.div``;

export default LabelEditor;
