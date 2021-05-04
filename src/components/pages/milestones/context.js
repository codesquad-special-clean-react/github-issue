import { createContext } from "react";

export const MilestonesContext = createContext({});

export const MilestonesContextWrapper = ({ children, value }) => {
  return (
    <MilestonesContext.Provider value={value}>
      {children}
    </MilestonesContext.Provider>
  );
};
