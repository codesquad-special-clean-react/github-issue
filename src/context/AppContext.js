import { createContext, useReducer } from 'react';
import { tabs } from '../utils/constant';

function reducer(state, { type }) {
  switch (type) {
    case 'SELECT_LABEL_TAB':
      return { ...state, selectedTab: tabs.label };
    case 'SELECT_MILESTONE_TAB':
      return { ...state, selectedTab: tabs.milestones };
    case 'OPEN_LABEL_FORM':
      return { ...state, isLabelFormOpen: true };
    case 'CLOSE_LABEL_FORM':
      return { ...state, isLabelFormOpen: false };
    default:
      throw new Error('No action is matched');
  }
}

const initialState = {
  selectedTab: tabs.label,
  isLabelFormOpen: false,
};
const AppContext = createContext();

function AppContextProvider(props) {
  const [appState, dispatchAppContext] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ appState, dispatchAppContext }}>
      {props.children}
    </AppContext.Provider>
  );
}

export { AppContext, AppContextProvider };
