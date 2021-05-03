import { createContext, useReducer } from 'react';
import { tabs } from '../utils/constant';

function reducer(state, { type }) {
  switch (type) {
    case 'SELECT_LABEL_TAB':
      return { ...state, selectedTab: tabs.label };
    case 'SELECT_MILESTONE_TAB':
      return { ...state, selectedTab: tabs.milestones };
    default:
      throw new Error('No action is matched');
  }
}

const initialState = {
  selectedTab: tabs.label,
};
const AppContext = createContext();

function AppContextProvider(props) {
  const [appState, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ appState, dispatch }}>
      {props.children}
    </AppContext.Provider>
  );
}

export { AppContext, AppContextProvider };
