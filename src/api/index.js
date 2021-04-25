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
