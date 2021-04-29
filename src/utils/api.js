async function request(method, url, body, headers) {
  const response = await fetch(url, { method, body, headers });
  const { status } = response;
  try {
    switch (status) {
      case 200:
        return await response.json();
      case 201:
        return await response.json();
      case 203:
        return await response.json();
      case 204:
        return await response.json();
      default:
        throw new Error(response.status);
    }
  } catch (e) {
    console.error(e);
    alert.open('데이터를 가져올 수 없습니다.');
  }
}

async function getRequest(url) {
  return await request('get', url);
}

async function postRequest(url, body) {
  const headers = { 'Content-Type': 'application/json' };
  return await request('post', url, body, headers);
}

async function putRequest(url, body) {
  const headers = { 'Content-Type': 'application/json' };
  return await request('put', url, body, headers);
}

async function deleteRequest(url) {
  return await request('delete', url);
}

async function requestLabels() {
  const url = `http://localhost:3000/labels`;
  return await getRequest(url);
}

async function requestAddLabel(id, name, description, color) {
  const url = `http://localhost:3000/labels`;
  const params = { name, description, color, id };
  const body = JSON.stringify(params);
  return await postRequest(url, body);
}

async function requestUpdateLabel(id, name, description, color) {
  const url = `http://localhost:3000/labels/${id}`;
  const params = { name, description, color };
  const body = JSON.stringify(params);
  return await putRequest(url, body);
}

async function requestDeleteLabel(id) {
  const url = `http://localhost:3000/labels/${id}`;
  return await deleteRequest(url);
}

export {
  requestLabels,
  requestAddLabel,
  requestUpdateLabel,
  requestDeleteLabel,
};
