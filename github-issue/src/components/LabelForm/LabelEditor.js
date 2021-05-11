import styled from 'styled-components';
import Label from '../Label/Label';
import { useState } from 'react';
import LabelFormField from './LabelFormField';
const LabelEditorWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  margin-bottom: 25px;
  width: 100%;

  border: 1px solid black;
  padding: 10px 10px 10px 10px;
`;

const LabelEditor = ({ url, onSubmit }) => {
  const [previewLabelName, setPreviewLabelName] = useState('');
  const [previewColor, setPreviewColor] = useState('black');
  return (
    <LabelEditorWrapper>
      <Label
        message={previewLabelName === '' ? 'Label preview' : previewLabelName}
        buttonColor={previewColor}
      />
      <LabelFormField
        url={url}
        onSubmit={onSubmit}
        name={previewLabelName}
        setName={setPreviewLabelName}
        color={previewColor}
        setColor={setPreviewColor}
      />
    </LabelEditorWrapper>
  );
};

export default LabelEditor;
