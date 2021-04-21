import React from "react";
import styled from "styled-components";

const LabelItem = ({ label }) => {
  return (
    <LabelWrapper>
      <LabelInfo>
        <Label color={label.color}>
          <span>{label.name}</span>
        </Label>
        <Description>{label.description}</Description>
      </LabelInfo>
      <LabelMenu>
        <button>Edit</button>
        <button>Delete</button>
      </LabelMenu>
    </LabelWrapper>
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

  ${(props) => console.log("Label color", props.color)}
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
