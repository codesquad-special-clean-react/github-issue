import { useState } from 'react';

export const useToggle = (initialState = false) => {
  const [state, setState] = useState(initialState);
  const toggle = () => {
    setState((prev) => !prev);
  };
  return [state, toggle];
};

export const useFetchData = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  return {
    data,
    pending: isLoading,
    run: (url) => {
      setIsLoading(true);
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setData(data.reverse());
        })
        .finally(() => setIsLoading(false));
    },
  };
};

export const usePostData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  return {
    pending: isLoading,
    error,
    run: (url, data) => {
      setIsLoading(true);
      fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
      })
        .then((response) => console.log(response))
        .catch((err) => setError(err))
        .finally(() => setIsLoading(false));
    },
  };
};

// ref: https://stackoverflow.com/questions/40284338/javascript-fetch-delete-and-put-requests
export const useDeleteData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  return {
    pending: isLoading,
    error,
    run: (url, id) => {
      setIsLoading(true);
      fetch(url + `/${id}`, {
        method: 'DELETE',
      })
        .then((response) => console.log(response))
        .catch((err) => setError(err))
        .finally(() => setIsLoading(false));
    },
  };
};

// ref: https://stackoverflow.com/questions/40284338/javascript-fetch-delete-and-put-requests
export const useEditData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  return {
    pending: isLoading,
    error,
    run: (url, id, data) => {
      setIsLoading(true);
      fetch(url + `/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({
          ...data,
        }),
        headers: { 'Content-Type': 'application/json' },
      })
        .then((response) => console.log(response))
        .catch((err) => setError(err))
        .finally(() => setIsLoading(false));
    },
  };
};
