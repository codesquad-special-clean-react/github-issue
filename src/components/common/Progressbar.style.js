import styled from 'styled-components';
import color from '../../utils/color';
import { darken } from 'polished';

const TotalBar = styled.div`
  width: 100%;
  background: ${darken(0.04, color.lightGrey)};
  height: 20px;
  border-radius: 5px;
`;

const StatusBar = styled.div`
  width: ${({ percentage }) => percentage}%;
  background: ${color.green};
  height: 20px;
  border-radius: ${({ percentage }) =>
    percentage === 100 ? '5px' : '5px 0 0 5px'};
`;

export { TotalBar, StatusBar };
