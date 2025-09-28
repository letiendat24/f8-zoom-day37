import { memo } from "react";

const ActionButtons = memo(({ onIncrement, onReset }) => {
    console.log("re-render ActionButtons")
    return (
        <>
            <button onClick={onIncrement}>Increment</button>
            <button onClick={onReset}>Reset</button>
        </>


    )
})

export default ActionButtons;