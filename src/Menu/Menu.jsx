import React from "react";
import styled from "styled-components";

const Menu = () => {
  return (
    <MenuWrapper>
      <div>
        <button className={"active"}>Labels</button>
        <button>Milestones</button>
      </div>
      <AddBtn>New Label</AddBtn>
    </MenuWrapper>
  );
};

const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  & div {
    display: flex;
    border: 1px solid grey;
  }

  & div > button {
    width: 100px;
    padding: 0.5em;
    cursor: pointer;
  }

  & button.active {
    background-color: rgb(0, 0, 255, 0.9);
    color: white;
  }
`;

const AddBtn = styled.button`
  width: 100px;
  border: 1px solid grey;
  background-color: #04b404;
  color: white;
  border-radius: 5px;
  font-weight: bold;
  padding: 5px;
  cursor: pointer;
`;

export default Menu;
