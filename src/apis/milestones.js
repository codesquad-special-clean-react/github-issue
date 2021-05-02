import { setMutationOption } from "../utils/requests";

const MILESTONES_URL = "http://localhost:3001/milestones";

export const fetchMileStones = () => {
  return fetch(MILESTONES_URL);
};

export const postMilestone = ({ params }) => {
  return fetch(MILESTONES_URL, {
    method: "POST",
    ...setMutationOption({ params }),
  });
};
