import Header from "./Header/Header";
import Menu from "./Menu/Menu";
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
        <h1>Hello React🎉🎉🎉</h1>
      </MainWrapper>
    </>
  );
}

export default App;
