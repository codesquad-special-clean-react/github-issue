import { createContext, useEffect, useReducer } from 'react';
import { requestLabels } from '../utils/api';

function reducer(state, { type, payload }) {
  const { labels } = state;

  switch (type) {
    case 'ADD_LABEL':
      const { newLabel } = payload;
      return { ...state, labels: [...labels, newLabel] };
    case 'UPDATE_LABELS':
      const { newLabels } = payload;
      return { ...state, labels: [...newLabels] };
    case 'OPEN_LABEL_FORM':
      return { ...state, isLabelFormOpen: true };
    case 'CLOSE_LABEL_FORM':
      return { ...state, isLabelFormOpen: false };
    default:
      throw new Error('No action');
  }
}

const initialLabels = {
  labels: [],
  isLabelFormOpen: false,
};
const LabelContext = createContext();

function LabelContextProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialLabels);

  useEffect(() => {
    (async function getLabels() {
      const newLabels = await requestLabels();
      dispatch({ type: 'UPDATE_LABELS', payload: { newLabels } });
    })();
  }, []);

  return (
    <LabelContext.Provider value={{ state, dispatch }}>
      {props.children}
    </LabelContext.Provider>
  );
}

export { LabelContext, LabelContextProvider };
