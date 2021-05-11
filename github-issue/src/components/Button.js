import styled from 'styled-components';
import Icon from '../icons';

const ButtonWrapper = styled.div`
  display: inline-flex;
  //   ref: https://stackoverflow.com/questions/37300614/how-to-adapt-a-flex-divs-width-to-content
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.buttonColor};
  padding: 5px 10px 5px 10px;
  border: 1px solid black;
`;

const ButtonContent = styled.div`
  color: ${(props) => props.fontColor};
  margin: 0 0 0 0;
  font-weight: bold;
`;

const ButtonMSG = styled.span`
  margin: 0;
`;

const Button = ({ message, buttonColor, fontColor, iconName, onClick }) => {
  return (
    <ButtonWrapper buttonColor={buttonColor} onClick={onClick}>
      <ButtonContent fontColor={fontColor}>
        {Icon(iconName)}
        <ButtonMSG id="buttonValue">{message}</ButtonMSG>
      </ButtonContent>
    </ButtonWrapper>
  );
};

export default Button;
