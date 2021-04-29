import styled from 'styled-components';
import color from '../../utils/color';

const LabelFormContainer = styled.div`
  background: ${color.lightGreyBackground};
  margin-bottom: 25px;
  padding: 20px;
  border: 1px solid ${color.lightGreyBorder};
  border-radius: 5px;

  &.hide {
    display: none;
  }
`;

const LabelTitle = styled.h4`
  display: inline-block;
  padding: 3px 10px;
  background: ${color.skyBlue};
  border-radius: 5px;
  margin: 0;
  margin-bottom: 30px;
`;

export { LabelTitle, LabelFormContainer };
