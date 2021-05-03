import styled from "styled-components";

export const NavWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    height: 32px;
    padding: 5px 16px;
    font-size: 14px;
    border-radius: 3px;
    font-weight: bold;
  }
  
  & > button {
    color: #ffffff;
    background-color: rgb(46, 164, 79);
  }


`

export const NavBtn = styled.button`
  background : ${({name, navTitle}) => name ===  navTitle ? '#0366D6' : '#ffffff'};
  color:  ${({name, navTitle}) => name ===  navTitle ? '#ffffff' : '#000000'};
  border : 1px solid #000000;
  pointer: cursor;
`
