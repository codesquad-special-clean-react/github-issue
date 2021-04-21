export const getLabels = () => {};

export const deleteLabel = async (id) => {
  const option = {
    method: "DELETE",
  };
  const response = await fetch(`http://localhost:3001/labels/${id}`, option);
  return response.json();
};
