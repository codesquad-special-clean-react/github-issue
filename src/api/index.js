import { LOCAL_URL } from "config/config";

export const getLabelData = async () => {
  try {
    const data = await fetch(`${LOCAL_URL}/labels`);
    const labels = await data.json();

    return labels;
  } catch (err) {
    console.log(err);
  }
};

export const createLabelData = async ({ id, name, theme, desc }) => {
  try {
    await fetch(`${LOCAL_URL}/labels`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        name,
        theme,
        desc,
      }),
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateLabelData = async ({ id, name, theme, desc }) => {
  try {
    const data = await fetch(`${LOCAL_URL}/labels`);
    const labels = await data.json();
    const filteredLabel = labels.filter((label) => label.id === id)[0];

    await fetch(`${LOCAL_URL}/labels/${filteredLabel.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        name,
        theme,
        desc,
      }),
    });
  } catch (err) {
    console.log(err);
  }
};
