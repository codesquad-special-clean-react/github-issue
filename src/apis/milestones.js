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

export const deleteMilestone = (milestoneId) => {
  return fetch(`${MILESTONES_URL}/${milestoneId}`, {
    method: "DELETE",
  });
};

export const putMilestone = async ({ milestoneId, params }) => {
  return fetch(`${MILESTONES_URL}/${milestoneId}`, {
    method: "PUT",
    ...setMutationOption({ params }),
  });
};
