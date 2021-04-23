import styled from 'styled-components';

const Header = (props) => <HeaderBlock>ISSUE</HeaderBlock>;

const HeaderBlock = styled.header`
  width: 100%;
  height: 12vh;
  color: white;
  background-color: #24292e;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Header;
