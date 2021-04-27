import styled, {css} from 'styled-components';

const Label = styled.span`
  height: 14px;
  line-height: 14px;
  border-radius: 3px;
  text-align: center;

  ${props => {
    const backgroundColor = props.backgroundColor;
    const color = props.color;
    const width = props.width;
    return css`
      background: ${backgroundColor};
      color: ${color};
      width: ${width ? width : 'auto'};
    `;
  }}
`;

const LabelComponent = ({children, ...rest}) => {
  return <Label {...rest}>{children}</Label>;
};

export default LabelComponent;
