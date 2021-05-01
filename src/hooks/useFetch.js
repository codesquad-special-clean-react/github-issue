import { useEffect, useState } from "react";

const useFetch = ({ request }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  useEffect(() => {
    setLoading(true);
    request()
      .then((res) => {
        return res.json();
      })
      .then((resData) => {
        console.log(resData);
        setData(resData);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [request]);

  return { loading, error, data };
};

export default useFetch;
