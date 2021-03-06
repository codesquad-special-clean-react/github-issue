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

const LabelEditor = ({
  labelId = undefined,
  onSubmit,
  onCancel,
  labelName = '',
  labelColor = 'black',
  labelDesc = '',
}) => {
  const [previewLabelName, setPreviewLabelName] = useState(labelName);
  const [previewColor, setPreviewColor] = useState(labelColor);
  const [previewDescription, setPreviewDescription] = useState(labelDesc);
  return (
    <LabelEditorWrapper>
      <Label
        message={previewLabelName === '' ? 'Label preview' : previewLabelName}
        buttonColor={previewColor === '' ? 'black' : previewColor}
      />
      <LabelFormField
        onSubmit={onSubmit}
        onCancel={onCancel}
        name={previewLabelName}
        setName={setPreviewLabelName}
        color={previewColor}
        setColor={setPreviewColor}
        description={previewDescription}
        setDescription={setPreviewDescription}
        labelId={labelId}
      />
    </LabelEditorWrapper>
  );
};

export default LabelEditor;
