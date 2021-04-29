import styled from 'styled-components';
import color from '../../utils/color';

const Form = styled.form`
  display: flex;
  justify-content: space-between;
`;

const InputContainer = styled.div`
  display: inline-block;
  margin-right: 10px;

  &.label_name {
    width: 25%;
  }

  &.description {
    width: 37.5%;
  }

  &.color {
    width: 12.5%;
  }

  & > label {
    font-weight: bold;
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${color.lightGreyBorder};
    border-radius: 5px;
    padding: 10px;
    box-sizing: border-box;
    margin-top: 5px;
  }
`;

const ColorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ColorButton = styled.div`
  cursor: pointer;
  background-color: ${({ backgroundColor }) =>
    backgroundColor || color.skyBlue};
  width: 30px;
  height: 30px;
  display: inline-block;
  vertical-align: middle;
  margin-right: 5px;
  border-radius: 5px;
  box-shadow: 1px 1px 3px ${color.grey};
  & > svg {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;

  & .button {
    margin-right: 10px;
    border-radius: 5px;
  }

  & .create_button {
  }
`;

export { Form, InputContainer, ColorContainer, ColorButton, ButtonContainer };
