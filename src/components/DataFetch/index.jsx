import { useEffect, useState } from "react";

function DataFetch({url, children}) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
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
    }, [url]);
    console.log(data)
    return children({data, loading, error})
}
export default DataFetch;