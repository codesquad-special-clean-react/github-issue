const LABELS_URL = "http://localhost:3001/labels";

export const fetchLabels = async () => {
  const response = await fetch(LABELS_URL);
  return response.json();
};
