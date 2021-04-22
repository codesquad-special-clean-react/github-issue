import React, { useState } from "react";
import styled from "styled-components";

import { getRandomColor } from "../../service/randomColor";

const AddLabelForm = ({ visible, hiddenLabelForm, createLabel }) => {
  const [name, setName] = useState("Label preview");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState(getRandomColor());

  if (!visible) return null;

  const onChangeColor = () => setColor(getRandomColor());
  const onCreateLabel = async () => {
    if (!name) {
      console.log("Label name 은 필수 값입니다!!");
      return;
    }

    const body = {
      id: Date.now(),
      name,
      description,
      color,
    };

    createLabel(body);
    hiddenLabelForm();
    setName("");
    setDescription("");
    onChangeColor();
  };

  return (
    <FormWrapper>
      <div>
        <Label color={color}>
          <span>{name !== "" ? name : "Label preview"}</span>
        </Label>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <FormBox>
          <SubFormBox>
            <label htmlFor="name">Label name</label>
            <Input
              id="name"
              placeholder="Label name"
              onChange={(event) => setName(event.target.value)}
            />
          </SubFormBox>
          <SubFormBox>
            <label htmlFor="description">Label description</label>
            <Input
              id="description"
              style={{ width: "600px" }}
              placeholder="Description (optoinal)"
              onChange={(event) => setDescription(event.target.value)}
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
          <CancelBtn onClick={hiddenLabelForm}> Cancel </CancelBtn>
          <CreateBtn onClick={onCreateLabel}>Create label</CreateBtn>
        </div>
      </div>
    </FormWrapper>
  );
};

const FormWrapper = styled.div`
  margin-top: 1em;
  border: 2px solid #f1f3f5;
  background-color: #f8f9fa;
  padding: 1em;
`;

const Label = styled.div`
  width: 30%;
  cursor: pointer;

  & > span {
    padding: 0.3em;
    background-color: ${(props) => (props.color ? props.color : "white")};
    color: black;
    border-radius: 5px;
  }
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

export default AddLabelForm;
