import styled from 'styled-components';
import { lighten, border, borderColor } from 'polished';
import color from '../../utils/color';

const Button = styled.button`
  padding: 10px 15px;
  font-size: 15px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${({ isPrimary, isDisabled }) => {
    const bgColor = isPrimary ? color.green : color.lightGrey;
    return isDisabled ? lighten(0.3, bgColor) : bgColor;
  }};
  border-style: none;
  ${border(
    '1px',
    'solid',
    `${({ isPrimary, isDisabled }) => {
      const borderedColor = isPrimary ? color.green : color.lightGrey;
      return isDisabled ? lighten(0.3, borderedColor) : borderedColor;
    }}`
  )};
  &:focus {
    outline: 0;
  }
  color: ${({ isPrimary }) => (isPrimary ? color.white : color.grey)};
`;

export { Button };
