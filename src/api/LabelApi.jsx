const URL = {
  labels: 'http://localhost:4000/labels',
};

export const fetchLabelData = async () => {
  const res = await fetch(`${URL.labels}`);
  const result = await res.json();

  return result;
};

export const postLabelData = async (state) => {
  const { labelName, desc } = state.createInput;
  const { randomColor } = state;

  const res = await fetch(`${URL.labels}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      label: labelName,
      text: desc,
      bgColor: randomColor,
      color: 'white',
    }),
  });

  const result = await res.json();
  return result;
};

export const deleteLabelData = async (id) => {
  await fetch(`${URL.labels}/${id}`, {
    method: 'DELETE',
  });
};
