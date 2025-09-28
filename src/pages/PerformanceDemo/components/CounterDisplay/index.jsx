import { memo } from "react";

const CounterDisplay = memo(({count}) => {
    console.log("render CounterDisplay");

    return (
        <div>
            {count}
        </div>
    )
})

CounterDisplay.displayName = "CounterDisplay";

export default CounterDisplay;