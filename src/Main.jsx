// external
import { createContext, useReducer } from "react";
import styled, { ThemeProvider } from "styled-components";

// internal
import { reducer } from "./store/Reducer";

import Header from "./view/HeaderView";
import Nav from "./container/NavContainer";
import SectionContainer from "./container/SectionContainer";

export const CreateInfoState = createContext(null);

const initialCreateInfo = {
  labelName: "default",
  desc: "default",
};

const Main = () => {
  const [createInfoState, dispatch] = useReducer(reducer, initialCreateInfo);
  return (
    <CreateInfoState.Provider value={(createInfoState, dispatch)}>
      <ThemeProvider theme={{}}>
        <Header />
        <Wrapper>
          <Nav />
          <SectionContainer />
        </Wrapper>
      </ThemeProvider>
    </CreateInfoState.Provider>
  );
};

export default Main;

const Wrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  border: 1px red solid;
`;
