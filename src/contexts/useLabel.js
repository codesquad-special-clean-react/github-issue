import React, { useContext, useReducer } from 'react';

const initialLabels = [
  'bug',
  'feature',
  'good first issue',
  'help wanted',
  'invalid',
];

const labelReducer = (state, action) => {
  switch (action.type) {
    case 'daf':
      break;

    default:
      break;
  }
};

const LabelContext = React.createContext();

export const LabelProvider = (props) => {
  const [labels, dispatch] = useReducer(labelReducer, initialLabels);

  return <LabelContext.Provider value={{ labels, dispatch }} {...props} />;
};

export const useLabel = () => useContext(LabelContext);
