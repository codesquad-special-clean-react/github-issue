import React, { useContext, useState } from "react";
import styled from "styled-components";

import Dialog from "@components/Dialog/Dialog";
import UpdateLabelForm from "@components/UpdateLabelForm/UpdateLabelForm";
import { DialogContext, dialogOpen } from "@reducer/dialogReducer";

const LabelItem = ({ label, updateLabel, deleteLabel }) => {
  const { isDialogDispatch } = useContext(DialogContext);

  const [isUpdateMode, setIsUpdateMode] = useState(false);

  const [name, setName] = useState(label.name);
  const [color, setColor] = useState(label.color);
  const [description, setDescription] = useState(label.description);

  // const handleConfirm = () => {
  //   setIsDialog(false);
  //   deleteLabel(label.id);
  // };

  // const handleCancel = () => {
  //   setIsDialog(false);
  // };

  const cancelUpdateMode = () => {
    setIsUpdateMode(false);
  };

  const changeUpdateMode = () => {
    setIsUpdateMode(true);
  };

  const onDeleteClick = () => {
    isDialogDispatch(dialogOpen());
  };

  return (
    <Item>
      <LabelWrapper>
        <LabelInfo>
          <Label color={color}>
            <span>{name}</span>
          </Label>
          {!isUpdateMode && <Description>{label.description}</Description>}
        </LabelInfo>
        <LabelMenu>
          {!isUpdateMode && <button onClick={changeUpdateMode}>Edit</button>}
          <button onClick={onDeleteClick}>Delete</button>
        </LabelMenu>
      </LabelWrapper>
      {isUpdateMode && (
        <UpdateLabelForm
          visible={isUpdateMode}
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

      <Dialog />
    </Item>
  );
};

const Item = styled.div`
  border-bottom: 1px solid #f1f3f5;
`;

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
