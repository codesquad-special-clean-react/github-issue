import React, { useEffect, useReducer } from 'react'
import {
  getMilestones,
  initialState,
  reducer
} from '../store/modules/milestone'

export const MilestonesContext = React.createContext();

function MilestoneProviderWrapper({children, toggleForm}) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    (async () => {
      await getMilestones(dispatch)
    })()
  }, [])

  return (
    <MilestonesContext.Provider value={{ state, dispatch, toggleForm}}>
      {children}
    </MilestonesContext.Provider>
  );
}

export default MilestoneProviderWrapper
