import { useCallback, useState } from "react"
import CounterDisplay from "./components/CounterDisplay";
import ExpensiveChild from "./components/ExpensiveChild";
import ActionButtons from "./components/ActionButtons";

function PerformanceDemo() {

    const [count, setCount] = useState(0);
    const [name, setName] = useState("Hello");
    const [items, setItems] = useState([]);

    const listItems = [
        { id: 1, name: "React" },
        { id: 2, name: "JavaScript" },
        { id: 3, name: "Performance" },
        { id: 4, name: "Optimization" },
    ]

    const handleIncrement = useCallback(() => {
        setCount(preCount => preCount + 1);
    }, [])

    const handleReset = useCallback(() => {
        setCount(0);
    }, [])

    const handleChangeName = useCallback(() => {
        setName(prev => prev === "Hello" ? "GoodBye" : "Hello")
    }, [])

    const handleAddItems = useCallback(() => {
        setItems(listItems);
    }, [])
    return (
        <>
            <CounterDisplay count={count} />
            <ExpensiveChild items={items} />
            <h1>Change Name: {name}</h1>
            <ActionButtons onIncrement={handleIncrement} onReset={handleReset} />
            <button
                onClick={handleIncrement}
            >
                Increment Count
            </button>
            <button onClick={handleChangeName}>Change Name</button>
            <button onClick={handleAddItems}>Add Item</button>
            
        </>
    )
}

export default PerformanceDemo