import React, { useState } from "react";
import styled from "styled-components";

import Dialog from "@components/Dialog/Dialog";
import UpdateLabelForm from "@components/UpdateLabelForm/UpdateLabelForm";

const LabelItem = ({ labelData }) => {
  const [isDialog, setIsDialog] = useState(false);
  const [isUpdateMode, setIsUpdateMode] = useState(false);

  const [label, setLabel] = useState(labelData);

  const cancelUpdateMode = () => {
    setIsUpdateMode(false);
  };

  const changeUpdateMode = () => {
    setIsUpdateMode(true);
  };

  const onDeleteClick = () => {
    setIsDialog(true);
  };

  return (
    <Item>
      <LabelWrapper>
        <LabelInfo>
          <Label color={label.color}>
            <span>{label.name}</span>
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
          setLabel={setLabel}
          cancelUpdateMode={cancelUpdateMode}
          changeUpdateMode={changeUpdateMode}
        />
      )}

      <Dialog label={label} isDialog={isDialog} setIsDialog={setIsDialog} />
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
