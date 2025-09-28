import useApi from "../../../../hooks/useApi";

function Users() {
    const {data, loading, error, refetch} = useApi("https://jsonplaceholder.typicode.com/users")
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>

    return (
        <div>
            <button onClick={refetch}>
                Refetch Data
            </button>
            <div>

            {data.map(item => <div key={item.id}>{item.name}</div>)}
            </div>
        </div>
    )
}

export default Users;