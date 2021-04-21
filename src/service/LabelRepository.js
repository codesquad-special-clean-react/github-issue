export const getLabels = async () => {
  const response = await fetch("http://localhost:3001/labels");
  return response.json();
};

export const deleteLabel = async (id) => {
  const option = {
    method: "DELETE",
  };
  const response = await fetch(`http://localhost:3001/labels/${id}`, option);
  return response.json();
};

export const create = async (body) => {
  const option = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };

  const response = await fetch("http://localhost:3001/labels", option);
  return response.json();
};
