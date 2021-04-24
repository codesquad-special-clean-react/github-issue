import { useState, useEffect } from 'react';

const useFetch = (callBack, url) => {
    const [loading, setLoading] = useState(false);

    const fetchInit = async () => {
        setLoading(true);

        const res = await fetch(url);
        const data = await res.json();

        callBack(data);
        setLoading(false);
    }

    useEffect(() => {
        fetchInit();
    }, [])

    return loading;
}

export default useFetch;