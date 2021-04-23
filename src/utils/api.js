async function request(method, url) {
  const response = await fetch(url, { method });
  const { status } = response;
  if (status !== 200) {
    throw new Error(response);
  }
  return await response.json();
}

async function getRequest(url) {
  return await request('get', url);
}

function postRequest() {}

async function requestLabels() {
  const url = `http://localhost:3000/labels`;
  return await getRequest(url);
}

export { requestLabels };
