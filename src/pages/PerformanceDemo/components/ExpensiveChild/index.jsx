import { memo, useMemo } from "react";

const ExpensiveChild = memo(({ items }) => {
    const totalNameStrings = useMemo(() => {
        console.log("Calculating total names...");

        return items.reduce((sum, item) => (
            sum + item.name.length
        ), 0)

    }, [items])

    const expensiveCalculation = useMemo(() => {
        console.log("Calculating longest name...");
        let longest = "";

        items.forEach(item => {
            for (let i = 0; i < 100000; i++) {
                if (item.name.length > longest.length) {
                    longest = item.name;
                }
            }
        });
        return longest;
    }, [items])

    return (
        <div>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>{item.id}. {item.name}</li>
                ))}
            </ul>
            <p>Total is: {totalNameStrings}</p>
            <p>Longest name is: {expensiveCalculation}</p>
        </div>
    )
})

export default ExpensiveChild;