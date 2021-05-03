import { useEffect, useState } from 'react'

export const useFetch = ({url}) => {
  const [state, setState] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(url);
        if (response.ok === false) {
          setErrorMessage(`response error. status code ${response.status}`)
          return false;
        }
        const list = await response.json();
        setState(list);
        setLoading(false);
      } catch (err) {
        console.error('fetch Error', err)
      } finally {
        setLoading(false)
      }
    })()
  }, [url]);

  return {
    state,
    errorMessage,
    loading
  }
}
