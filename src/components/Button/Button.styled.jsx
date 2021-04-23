import styled from 'styled-components';
import Button from './Button';

const StyledNewButton = styled(Button)`
  background: linear-gradient(#2ea22f, #2ea55f);
  color: white;
  border-radius: 5px;
  border: 1px solid #1b1f2326;
`;

const TextButton = styled.button`
  background-color: transparent;
  border: transparent;
`;

const StyledTextButton = styled(TextButton)`
  color: #586069;
`;

export { StyledNewButton, StyledTextButton };
