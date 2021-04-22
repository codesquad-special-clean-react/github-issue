import React, { useState } from "react";
import styled from "styled-components";

import Dialog from "../Dialog/Dialog";
import UpdateLabelForm from "../UpdateLabelForm/UpdateLabelForm";

const LabelItem = ({ label, updateLabel, deleteLabel }) => {
  const [dialog, setDialog] = useState(false);
  const [updateMode, setUpdateMode] = useState(false);
  const [name, setName] = useState(label.name);
  const [color, setColor] = useState(label.color);
  const [description, setDescription] = useState(label.description);

  const handleConfirm = async () => {
    setDialog(false);
    deleteLabel(label.id);
  };

  const handleCancel = () => {
    setDialog(false);
  };

  const cancelUpdateMode = () => {
    setUpdateMode(false);
  };

  const changeUpdateMode = () => {
    setUpdateMode(true);
  };

  return (
    <div style={{ borderBottom: "1px solid #f1f3f5" }}>
      <LabelWrapper>
        <LabelInfo>
          <Label color={color}>
            <span>{name}</span>
          </Label>
          {!updateMode && <Description>{label.description}</Description>}
        </LabelInfo>
        <LabelMenu>
          {!updateMode && <button onClick={changeUpdateMode}>Edit</button>}
          <button onClick={() => setDialog(true)}>Delete</button>
        </LabelMenu>
      </LabelWrapper>
      {updateMode && (
        <UpdateLabelForm
          visible={updateMode}
          label={label}
          cancelUpdateMode={cancelUpdateMode}
          name={name}
          setName={setName}
          color={color}
          setColor={setColor}
          description={description}
          setDescription={setDescription}
          updateLabel={updateLabel}
        />
      )}
      <Dialog
        visible={dialog}
        handleCancel={handleCancel}
        handleConfirm={handleConfirm}
      />
    </div>
  );
};

const LabelWrapper = styled.li`
  display: flex;
  padding: 1em;
  justify-content: space-between;
`;

const LabelInfo = styled.div`
  display: flex;
  width: 90%;
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
const Description = styled.div`
  color: grey;
`;

const LabelMenu = styled.div`
  & button {
    color: grey;
    cursor: pointer;
  }

  & button:hover {
    font-weight: bold;
  }
`;

export default LabelItem;
