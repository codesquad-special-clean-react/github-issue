import { Header, SubHeader } from 'components';
import styled from 'styled-components';

const Layout = ({ children }) => (
  <>
    <Header />
    <MainBlock>{children}</MainBlock>
  </>
);

const MainBlock = styled.main`
  padding-top: 30px;
  width: 90vw;
  margin: auto;
`;

export default Layout;
