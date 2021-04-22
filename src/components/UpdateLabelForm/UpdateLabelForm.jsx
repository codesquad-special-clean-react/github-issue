import React from "react";
import styled from "styled-components";

import { getRandomColor } from "../../service/randomColor";

const UpdateLabelForm = ({
  label,
  visible,
  cancelUpdateMode,
  name,
  setName,
  color,
  setColor,
  description,
  setDescription,
  updateLabel,
}) => {
  if (!visible) return null;

  const onChangeColor = () => setColor(getRandomColor());
  const onCancel = () => {
    setName(label.name);
    setColor(label.color);
    setDescription(label.description);
    cancelUpdateMode();
  };
  const onSaveChange = async () => {
    const updatedLabel = {
      id: label.id,
      name,
      description,
      color,
    };

    await updateLabel(updatedLabel);
    cancelUpdateMode();
  };

  return (
    <FormWrapper>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <FormBox>
          <SubFormBox>
            <label htmlFor="name">Label name</label>
            <Input
              id="name"
              placeholder="Label name"
              onChange={(event) => setName(event.target.value)}
              value={name}
            />
          </SubFormBox>
          <SubFormBox>
            <label htmlFor="description">Label description</label>
            <Input
              id="description"
              style={{ width: "600px" }}
              placeholder="Description (optoinal)"
              onChange={(event) => setDescription(event.target.value)}
              value={description}
            />
          </SubFormBox>
          <SubFormBox>
            <label htmlFor="color">color</label>
            <div style={{ display: "flex" }}>
              <RefreshBtn color={color} onClick={onChangeColor}>
                ↻
              </RefreshBtn>
              <Input value={color} readOnly />
            </div>
          </SubFormBox>
        </FormBox>
        <div style={{ display: "flex", marginTop: "30px" }}>
          <CancelBtn onClick={onCancel}> Cancel </CancelBtn>
          <CreateBtn onClick={onSaveChange}>Save changes</CreateBtn>
        </div>
      </div>
    </FormWrapper>
  );
};

const FormWrapper = styled.div`
  background-color: transparent;
  padding: 1em;
`;

const FormBox = styled.div`
  display: flex;
`;

const SubFormBox = styled.div`
  margin-top: 1em;
  display: flex;
  flex-direction: column;
  margin-right: 1em;

  & > label {
    font-weight: bold;
  }
`;

const Input = styled.input`
  padding: 0.5em;
  border: 1px solid #f1f3f5;
`;

const RefreshBtn = styled.button`
  cursor: pointer;
  background-color: ${(props) => (props.color ? props.color : "white")};
`;

const CancelBtn = styled.button`
  border: 1px solid #acacac;
  margin-right: 20px;
  cursor: pointer;
`;
const CreateBtn = styled.button`
  border: 1px solid #acacac;
  background-color: #04b404;
  color: white;
  cursor: pointer;
`;

export default UpdateLabelForm;
