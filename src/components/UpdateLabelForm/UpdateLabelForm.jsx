import React, { useContext, useState } from "react";
import styled from "styled-components";

import { LabelsContext, updateLabel } from "@reducer/labelReducer";
import labelFetcher from "@src/service/LabelFetch";
import { getRandomColor } from "@utils/utils";

const UpdateLabelForm = ({ visible, label, setLabel, cancelUpdateMode }) => {
  const [originLabel] = useState(label);
  const { labelsDispatch } = useContext(LabelsContext);

  if (!visible) return null;

  const onChangeColor = () => setLabel({ ...label, color: getRandomColor() });
  const onCancel = () => {
    setLabel(originLabel);
    cancelUpdateMode();
  };

  const onSaveChange = async () => {
    const updatedLabel = {
      id: label.id,
      name: label.name,
      description: label.description,
      color: label.color,
    };

    try {
      const result = await labelFetcher.update(updatedLabel.id, updatedLabel);
      if (result.ok) {
        labelsDispatch(updateLabel(label.id, updatedLabel));
      }
    } catch (error) {
      console.error(`Update Label Error: ${error}`);
    } finally {
      cancelUpdateMode();
    }
  };

  const onSetLabelProperty = (target, key) => {
    setLabel({ ...label, [key]: target.value });
  };

  return (
    <FormWrapper>
      <FormBox>
        <SubFormBox>
          <label htmlFor="name">Label name</label>
          <Input
            id="name"
            placeholder="Label name"
            onChange={({ target }) => onSetLabelProperty(target, "name")}
            value={label.name}
          />
        </SubFormBox>
        <SubFormBox>
          <label htmlFor="description">Label description</label>
          <Input
            id="description"
            style={{ width: "600px" }}
            placeholder="Description (optoinal)"
            onChange={({ target }) => onSetLabelProperty(target, "description")}
            value={label.description}
          />
        </SubFormBox>
        <SubFormBox>
          <label htmlFor="color">color</label>
          <div>
            <RefreshBtn color={label.color} onClick={onChangeColor}>
              ↻
            </RefreshBtn>
            <Input value={label.color} readOnly />
          </div>
        </SubFormBox>
      </FormBox>
      <ButtonGroup>
        <CancelBtn onClick={onCancel}> Cancel </CancelBtn>
        <CreateBtn onClick={onSaveChange}>Save changes</CreateBtn>
      </ButtonGroup>
    </FormWrapper>
  );
};

const FormWrapper = styled.div`
  background-color: transparent;
  padding: 1em;
  display: felx;
  justify-content: space-between;
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

  & > div {
    display: flex;
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

const ButtonGroup = styled.div`
  display: flex;
  margin-top: 2em;
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
