import { createContext, useEffect, useReducer } from 'react';
import { requestLabels } from '../utils/api';

function reducer(state, { type, payload }) {
  const { labels } = state;
  switch (type) {
    case 'UPDATE_LABELS':
      const { newLabels } = payload;
      return { ...state, labels: [...newLabels] };
    case 'REMOVE_LABEL':
      const { id } = payload;
      return {
        ...state,
        labels: labels.filter(({ id: labelId }) => id !== labelId),
      };
    case 'OPEN_LABEL_FORM':
      return { ...state, isLabelFormOpen: true };
    case 'CLOSE_LABEL_FORM':
      return { ...state, isLabelFormOpen: false };
    default:
      throw new Error('No action is matched');
  }
}

const initialState = {
  labels: [],
  isLabelFormOpen: false,
};
const LabelContext = createContext();

function LabelContextProvider(props) {
  const [labelState, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    (async function getLabels() {
      const newLabels = await requestLabels();
      dispatch({ type: 'UPDATE_LABELS', payload: { newLabels } });
    })();
  }, []);

  return (
    <LabelContext.Provider value={{ labelState, dispatch }}>
      {props.children}
    </LabelContext.Provider>
  );
}

export { LabelContext, LabelContextProvider };
