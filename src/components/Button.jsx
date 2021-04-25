import styled, {css} from 'styled-components';

const Button = styled.button`
  display: inline-flex;
  outline: none;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding: 0 1em;
  vertical-align: top;

  ${props => {
    const backgroundColor = props.backgroundColor;
    const size = props.size;
    const width = props.width;
    const height = props.height;
    const color = props.color;
    return css`
      background: ${backgroundColor};
      font-size: ${size};
      color: ${color};
      width: ${width};
      height: ${height};
    `;
  }}
`;

const ButtonComponent = ({children, ...rest}) => {
  return <Button {...rest}>{children}</Button>;
};

export default ButtonComponent;
