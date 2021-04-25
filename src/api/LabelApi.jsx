const URL = {
  labels: 'http://localhost:4000/labels',
};

export const fetchLabelData = async () => {
  return fetch(`${URL.labels}`)
    .then(res => res.json())
    .then(res => res);
};

export const postLabelData = async state => {
  return await fetch(`${URL.labels}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      label: state.inputs.labelName,
      text: state.inputs.desc,
      bgColor: state.randomColor,
      color: 'white',
    }),
  })
    .then(res => res.json())
    .then(res => res);
};

export const deleteLabelData = async id => {
  return fetch(`${URL.labels}/${id}`, {
    method: 'DELETE',
  })
    .then(res => res.json())
    .then(res => res);
};
