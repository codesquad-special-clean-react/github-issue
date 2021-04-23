import React, { useContext, useReducer } from 'react';

const ADD_LABEl = 'ADD_LABEl';
const EDIT_LABEL = 'EDIT_LABEL';
const DELETE_LABEL = 'DELETE_LABEL';

const initialState = {
  loading: false,
  labels: [
    {
      name: 'bug',
      color: '#D73949',
      description: `Something isn't working`,
      _createdAt: '2021-04-23T04:33:10.346Z',
      _updatedAt: '2021-04-23T04:33:10.346Z',
    },
    {
      name: 'feature',
      color: '#0375CA',
      description: `New feature or request`,
      _createdAt: '2021-04-23T04:33:10.346Z',
      _updatedAt: '2021-04-23T04:33:10.346Z',
    },
    {
      name: 'good first issue',
      color: '#7058FF',
      description: `Good for newcomers`,
      _createdAt: '2021-04-23T04:33:10.346Z',
      _updatedAt: '2021-04-23T04:33:10.346Z',
    },
    {
      name: 'help wanted',
      color: '#4F1FA9',
      description: `Extra attention is needed`,
      _createdAt: '2021-04-23T04:33:10.346Z',
      _updatedAt: '2021-04-23T04:33:10.346Z',
    },
    {
      name: 'invalid',
      color: '#CB21B9',
      description: `This doesn't seem right`,
      _createdAt: '2021-04-23T04:33:10.346Z',
      _updatedAt: '2021-04-23T04:33:10.346Z',
    },
  ],
  error: null,
};

const labelReducer = (state, action) => {
  switch (action.type) {
    case ADD_LABEl:
      return { ...state, labels: [...state.labels, action.payload.newLabels] };
    case EDIT_LABEL:
      return {
        ...state,
        labels: state.labels.map((label) => ({
          ...label,
          ...action.payload.labelConfig,
          _updatedAt: new Date().toISOString(),
        })),
      };
    case DELETE_LABEL:
      return {
        ...state,
        labels: state.labels.filter(
          (label) => label.name === action.payload.name
        ),
      };
    default:
      return state;
  }
};

const LabelContext = React.createContext();

export const LabelProvider = (props) => {
  const [state, dispatch] = useReducer(labelReducer, initialState);

  return <LabelContext.Provider value={{ state, dispatch }} {...props} />;
};

export const useLabel = () => useContext(LabelContext);
