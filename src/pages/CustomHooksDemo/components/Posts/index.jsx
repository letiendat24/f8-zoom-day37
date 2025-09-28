import useApi from "../../../../hooks/useApi";

function Posts() {
    const {data, loading, error, refetch} = useApi("https://jsonplaceholder.typicode.com/posts?_limit=5")
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>

    return (
        <div>
            <button onClick={refetch}>
                Refetch Data
            </button>
            {data.map(item => <div key={item.id}>{item.title}</div>)}
        </div>
    )
}

export default Posts;