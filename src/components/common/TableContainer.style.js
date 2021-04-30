import styled from 'styled-components';
import color from '../../utils/color';
import { darken } from 'polished';

const Table = styled.table`
  padding: 0;
  width: 100%;
  border-spacing: 0;
  border-radius: 5px;

  & tr {
    border: 1px solid ${darken(0.07, color.lightGrey)};
    box-sizing: border-box;
    padding: 20px;
    display: block;
  }

  & > thead > tr:first-child {
    border-radius: 5px 5px 0 0;
    background: ${color.lightGrey};
  }

  & > tbody > tr:last-child {
    border-radius: 0 0 5px 5px;
  }
`;

export { Table };
