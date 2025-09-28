import { useCallback, useEffect, useState } from "react";

function useApi(url) {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [reload, setReload] = useState(0);


    const refetch = useCallback(() => {
        setReload((prev) => prev+1)
    }, []);
    
    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                return res.json()
            })
            .then((result) => setData(result))
            .catch((error) => setError(error))
            .finally(() => {
                setLoading(false);
            })
    }, [url, reload]);

    return {data, loading, error, refetch}
}

export default useApi;