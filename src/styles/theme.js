import { css } from "styled-components";

const colors = {
  white: "#ffffff",
  black: "#111111",
  grey: "#cccccc",
  lightGrey: "#ebebeb",
  blue: "#1a73e8",
  green: "#60d805",
};

const container = css`
  width: 1170px;
  margin: 0 auto;
  padding: 0 15px;
`;

const commonButtonStyle = css`
  padding: 10px 15px;
  border-radius: 3px;
  font-size: 14px;
  cursor: pointer;
`;

const theme = {
  colors,
  container,
  commonButtonStyle,
};

export default theme;
