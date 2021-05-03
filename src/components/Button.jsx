import styled, { css } from "styled-components";

const Button = styled.button`
  display: inline-flex;
  outline: none;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding: 0 1em;
  vertical-align: top;

  ${({ backgroundColor, size, width, height, color }) => {
    return css`
      background: ${backgroundColor};
      font-size: ${size};
      color: ${color};
      width: ${width};
      height: ${height};
    `;
  }}
`;

const ButtonComponent = ({ children, ...rest }) => {
  return <Button {...rest}>{children}</Button>;
};

export default ButtonComponent;
