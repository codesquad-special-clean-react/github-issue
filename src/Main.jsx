// external
import { createContext, useReducer } from 'react';
import styled, { ThemeProvider } from 'styled-components';

// internal
import { reducer, initialCreateInfo } from './store/Reducer';

import Header from './view/HeaderView';
import Nav from './container/NavContainer';
import SectionContainer from './container/SectionContainer';

export const CreateInfoState = createContext(null);
export const CreateInfoDispatch = createContext(null);

const Main = () => {
  const [createInfoState, dispatch] = useReducer(reducer, initialCreateInfo);

  console.log(createInfoState);
  return (
    <CreateInfoState.Provider value={createInfoState}>
      <CreateInfoDispatch.Provider value={dispatch}>
        <ThemeProvider theme={{}}>
          <Header />
          <Wrapper>
            <Nav />
            <SectionContainer />
          </Wrapper>
        </ThemeProvider>
      </CreateInfoDispatch.Provider>
    </CreateInfoState.Provider>
  );
};

export default Main;

const Wrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  border: 1px red solid;
`;
