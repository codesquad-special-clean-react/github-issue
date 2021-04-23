const URL = {
  labels: 'http://localhost:3001/labels',
};

const getData = async (url) => {
  const response = await fetch(url);

  if (response.ok) {
    const body = await response.json()
    console.log("data", body)
    return body
  } else {
    throw new Error(`${url}을 가져오는데 실패했습니다.`)
  }
}

export const getLabels = async () => await getData(URL.labels)
