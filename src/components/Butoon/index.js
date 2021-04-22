import styled from 'styled-components'


/*
    type: primary, secondary
*/
const Button = styled.button`
  padding: 10px 20px;
  border: ${({btnType}) => btnType === 'primary' ? 'none' : '1px solid #333'};
  border-radius: 4px;
  background-color: ${({btnType}) => btnType === 'primary' ? '#27ae60' : 'inherite'};
  color: ${({btnType}) => btnType === 'primary' ? '#fff' : '#333'};;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: ${({btnType}) => btnType === 'primary' ? '#2ecc71' : 'inherite'};
  }
`
export default Button;

