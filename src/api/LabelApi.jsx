const URL = {
  labels: "http://localhost:4000/labels",
};

export const fetchLabelData = async () => {
  const res = await fetch(`${URL.labels}`);
  const result = await res.json();

  return result;
};

export const postLabelData = async (state) => {
  try {
    const res = await fetch(`${URL.labels}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        label: state.inputs.labelName,
        text: state.inputs.desc,
        bgColor: state.randomColor,
        color: "white",
      }),
    });

    const result = await res.json();
    return result;
  } catch (err) {
    throw new Error('post error');
  }
};

export const deleteLabelData = async (id) => {
  try {
    await fetch(`${URL.labels}/${id}`, {
      method: "DELETE",
    });
  }
  catch(err) {
    throw new Error('delete error');
  }
  
};
