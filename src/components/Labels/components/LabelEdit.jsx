import styled from "styled-components";

export default function LabelCreate(props) {
  const {
    type,
    labelInfo: { name, desc, theme },
    labelInputHandler,
    labelSubmit,
  } = props;

  return (
    <LabelCreateWrap>
      {type === "create" && (
        <LabelPreviewWrap>
          <LabelPreview color={theme}>{name}</LabelPreview>
        </LabelPreviewWrap>
      )}

      <CreateInfo>
        <CreateInfoItem>
          <Label>Label name</Label>
          <Input
            placeholder="Label name"
            name="name"
            value={name}
            onChange={labelInputHandler}
          />
        </CreateInfoItem>
        <CreateInfoItem>
          <Label>Description</Label>
          <Input
            placeholder="Description (optional)"
            name="desc"
            value={desc}
            onChange={labelInputHandler}
          />
        </CreateInfoItem>
        <CreateInfoItem>
          <Label>Color</Label>
          <Input
            placeholder="hex color"
            name="theme"
            value={theme}
            onChange={labelInputHandler}
          />
        </CreateInfoItem>
        <CreateInfoItem>
          <CancelBtn>Cancel</CancelBtn>
          <CreateBtn onClick={labelSubmit}>
            {type === "create" ? "Create Label" : "Save Change"}
          </CreateBtn>
        </CreateInfoItem>
      </CreateInfo>
    </LabelCreateWrap>
  );
}

const LabelCreateWrap = styled.div`
  width: 100%;
  margin-bottom: 25px;
  padding: 15px;
  background: ${({ theme }) => theme.colors.lightGrey};
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: 3px;
`;

const LabelPreviewWrap = styled.div`
  margin-bottom: 15px;
`;

const LabelPreview = styled.span`
  padding: 4px 10px;
  border-radius: 20px;
  background: ${({ color }) => color || "#ccc"};
  font-size: 14px;
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
