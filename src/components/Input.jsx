import styled, { css } from "styled-components";

const Input = styled.input`
  margin: 0.5em 0.5em;
  /* display: inline-flex; */

  ${({ width }) => {
    return css`
      width: ${width};
    `;
  }}
`;

const InputComponent = ({ children, ...rest }) => {
  return <Input {...rest}>{children}</Input>;
};

export default InputComponent;
