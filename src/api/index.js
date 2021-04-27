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
