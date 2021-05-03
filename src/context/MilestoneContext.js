import { createContext, useReducer, useEffect } from 'react';
import { requestMilestones } from '../utils/api';

const reducer = (milestones, { type, payload }) => {
  switch (type) {
    case 'UPDATE_MILESTONES':
      const { newMilestones } = payload;
      return [...newMilestones];
    case 'REMOVE_MILESTONE':
      const { id } = payload;
      return milestones.filter(({ id: milestoneId }) => id !== milestoneId);
    default:
      throw new Error('No action is matched');
  }
};

const initialMilestones = [];
export const MilestoneContext = createContext();

export const MilestoneContextProvider = (props) => {
  const [milestones, dispatch] = useReducer(reducer, initialMilestones);

  useEffect(() => {
    (async () => {
      const newMilestones = await requestMilestones();
      dispatch({ type: 'UPDATE_MILESTONES', payload: { newMilestones } });
    })();
  }, []);

  return (
    <MilestoneContext.Provider value={{ milestones, dispatch }}>
      {props.children}
    </MilestoneContext.Provider>
  );
};
