import styled from "styled-components";

export default function LabelCreate(props) {
  const { newLabelInfo, createLabelInputHandler, createLabelSubmit } = props;
  const { name, desc, theme } = newLabelInfo;

  return (
    <LabelCreateWrap>
      <LabelPreviewWrap>Label Preview</LabelPreviewWrap>
      <CreateInfo>
        <CreateInfoItem>
          <Label>Label name</Label>
          <Input
            placeholder="Label name"
            name="name"
            value={name}
            onChange={createLabelInputHandler}
          />
        </CreateInfoItem>
        <CreateInfoItem>
          <Label>Description</Label>
          <Input
            placeholder="Description (optional)"
            name="desc"
            value={desc}
            onChange={createLabelInputHandler}
          />
        </CreateInfoItem>
        <CreateInfoItem>
          <Label>Color</Label>
          <Input
            placeholder="hex color"
            name="theme"
            value={theme}
            onChange={createLabelInputHandler}
          />
        </CreateInfoItem>
        <CreateInfoItem>
          <CancelBtn>Cancel</CancelBtn>
          <CreateBtn onClick={createLabelSubmit}>Create Label</CreateBtn>
        </CreateInfoItem>
      </CreateInfo>
    </LabelCreateWrap>
  );
}

const LabelCreateWrap = styled.div`
  margin-bottom: 25px;
  padding: 15px;
  background: ${({ theme }) => theme.colors.lightGrey};
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: 3px;
`;

const LabelPreviewWrap = styled.div`
  margin-bottom: 15px;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: 3px;
`;

const Label = styled.label`
  width: 100%;
  margin-bottom: 7px;
  font-size: 12px;
`;

const CreateInfo = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CreateInfoItem = styled.li`
  display: flex;
  flex-wrap: wrap;
`;

const CreateBtn = styled.button`
  ${({ theme }) => theme.commonButtonStyle}
`;

const CancelBtn = styled.button`
  ${({ theme }) => theme.commonButtonStyle}

  margin-right: 10px;
  background: ${({ theme }) => theme.colors.lightGrey};
`;
