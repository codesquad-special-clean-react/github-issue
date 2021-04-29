// external
import styled, { ThemeProvider } from "styled-components";

// internal
import Header from "./view/HeaderView";
import Nav from "./container/NavContainer";
import SectionContainer from "./container/SectionContainer";

const Main = () => {
  return (
    <ThemeProvider theme={{}}>
      <Header />
      <Wrapper>
        <Nav />
        <SectionContainer />
      </Wrapper>
    </ThemeProvider>
  );
};

export default Main;

const Wrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  border: 1px red solid;
`;
