import { useState, useEffect } from 'react';

export const useFetchData = (url) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
        })
        .finally(() => setIsLoading(false));
    }, 1000);
  }, [url]);
  return [data, isLoading];
};
