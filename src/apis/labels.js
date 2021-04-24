const LABELS_URL = "http://localhost:3001/labels";

export const fetchLabels = async () => {
  try {
    const response = await fetch(LABELS_URL);
    return response.json();
  } catch (e) {
    alert(e);
  }
};

export const postLabel = async (params) => {
  try {
    const response = await fetch(LABELS_URL, {
      method: "POST",
      body: JSON.stringify(params),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.json();
  } catch (e) {
    alert(e);
  }
};

export const deleteLabel = async (labelId) => {
  try {
    await fetch(`${LABELS_URL}/${labelId}`, {
      method: "DELETE",
    });
  } catch (e) {
    alert(e);
  }
};
