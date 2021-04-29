import styled from "styled-components";
import {Field, FormAction} from "../../Label/LabelForm/LabelForm.style";

export const CreateFormHeader = styled.div`
  height: 74px;
  border-bottom: 1px solid rgb(225, 228, 232);

  h1 {
    margin-bottom: 8px;
  }
`

export const CreateFormWrap = styled.form`
  margin: 15px 0;
`

export const FormLabel = styled(Field)`
  margin-bottom: 15px;


  input {
    width: 440px;
    height: 32px;
    border: 1px solid rgb(225, 228, 232);
    border-radius: 6px;
    padding: 1px 5px;
    background-color: rgb(250, 251, 252);
    outline: none;
  }

  textarea {
    width: 80%;
    border: 1px solid rgb(225, 228, 232);
    border-radius: 6px;
    padding: 1px 5px;
    background-color: rgb(250, 251, 252);
  }
`

export const FormBtn = styled(FormAction)`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-top: 15px;
  border-top: 1px solid rgb(225, 228, 232);


  button {
    &[type="submit"] {
      opacity: ${props => props.title ? 1 : 0.5};
    }
  }
`
