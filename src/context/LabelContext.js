import { createContext, useEffect, useReducer } from 'react';
import { requestLabels } from '../utils/api';

function reducer(labels, { type, payload }) {
  switch (type) {
    case 'ADD_LABEL':
      const { newLabel } = payload;
      return [...labels, newLabel];
    case 'UPDATE_LABELS':
      const { newLabels } = payload;
      return [...newLabels];
    default:
      throw new Error('No action is matched');
  }
}

const initialLabels = [];
const LabelContext = createContext();

function LabelContextProvider(props) {
  const [labels, dispatchLabelContext] = useReducer(reducer, initialLabels);

  useEffect(() => {
    (async function getLabels() {
      const newLabels = await requestLabels();
      dispatchLabelContext({ type: 'UPDATE_LABELS', payload: { newLabels } });
    })();
  }, []);

  return (
    <LabelContext.Provider value={{ labels, dispatchLabelContext }}>
      {props.children}
    </LabelContext.Provider>
  );
}

export { LabelContext, LabelContextProvider };
