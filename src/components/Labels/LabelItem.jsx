import React, { useState } from "react";
import styled from "styled-components";

import Dialog from "../Dialog/Dialog";
import LabelFetch from "../../service/LabelFetch";

const LabelItem = ({ label, handleDelete }) => {
  const [dialog, setDialog] = useState(false);

  const handleConfirm = async () => {
    setDialog(false);
    handleDelete(label.id);
    await LabelFetch.delete(label.id);
  };

  const handleCancel = () => {
    setDialog(false);
  };

  return (
    <>
      <LabelWrapper>
        <LabelInfo>
          <Label color={label.color}>
            <span>{label.name}</span>
          </Label>
          <Description>{label.description}</Description>
        </LabelInfo>
        <LabelMenu>
          <button>Edit</button>
          <button onClick={() => setDialog(true)}>Delete</button>
        </LabelMenu>
      </LabelWrapper>
      <Dialog
        visible={dialog}
        handleCancel={handleCancel}
        handleConfirm={handleConfirm}
      />
    </>
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
    background-color: ${(props) => (props.color ? props.color : "red")};
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
