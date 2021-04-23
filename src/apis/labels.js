const LABELS_URL = "http://localhost:3001/labels";

export const fetchLabels = () => {
  return fetch(LABELS_URL);
};
