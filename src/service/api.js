const URL = {
  labels: 'http://localhost:3001/labels'
};

export async function getLabels() {
  const response = await fetch(URL.labels);
  const data = await response.json();

  return data;
}

export async function postLabels(data) {
  const response = await fetch(URL.labels, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  return response;
}
