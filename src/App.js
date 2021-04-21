import Header from "./Header/Header";
import Menu from "./Menu/Menu";
import Labels from "./Labels/Labels";
import styled from "styled-components";

const MainWrapper = styled.div`
  margin: 1em;
  padding: 1em;
`;

function App() {
  return (
    <>
      <Header />
      <MainWrapper>
        <Menu />
        <Labels />
      </MainWrapper>
    </>
  );
}

export default App;
