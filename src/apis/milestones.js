const MILESTONES_URL = "http://localhost:3001/milestones";

export const fetchMileStones = () => {
  return fetch(MILESTONES_URL);
};
