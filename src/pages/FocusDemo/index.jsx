import { useRef, useState } from "react";
import CustomInput from "../../components/CustomInput";
import styles from "./FocusDemo.module.scss";
function trimSpaces(str) {
    return str.replace(/^\s+|\s+$/g, '');
}

function FocusDemo() {
    const childRef1 = useRef(null);
    const childRef2 = useRef(null);

    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');

    const counter = useRef(0);
    counter.current += 1;


    const handleChange1 = (e) => {
        setValue1(e.target.value);
    }
    const handleChange2 = (e) => {
        setValue2(e.target.value);
    }

    const handleGetValue = () => {
        console.log("Value Input 1:", trimSpaces(childRef1.current.getValue()) || "No Data");
        console.log("Value Input 2:", trimSpaces(childRef2.current.getValue()) || "No Data");
    }

    const handleClear = () => {
        childRef1.current.clear()
        setValue1("");

        childRef2.current.clear();
        setValue2("");
    }
    return (
        <div className={styles.container}>
            <div className={styles.counter}>
                <h1>Counter: {counter.current}</h1>
            </div>

            <div className={styles.input}>
                <div className={styles.input1}>
                    <CustomInput
                    ref={childRef1}
                    label={"Input1"}
                    placeholder={"Text Input1...."}
                    value={value1}
                    onChange={handleChange1}
                />
                </div>
                
                <div className={styles.input2}>
                    <CustomInput
                    ref={childRef2}
                    label={"Input2"}
                    placeholder={"Text Input2...."}
                    value={value2}
                    onChange={handleChange2}
                />
                </div>
                
            </div>

            <div className={styles.buttons}>
                <button onClick={() => childRef1.current.focus()}>Focus Input 1</button>
                <button onClick={() => childRef2.current.focus()}>Focus Input 2</button>
                <button onClick={() => handleGetValue()}>Get Values</button>
                <button onClick={() => handleClear()}>Clear Both</button>
            </div>

        </div>
    )
}

export default FocusDemo;