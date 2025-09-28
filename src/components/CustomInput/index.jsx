import { forwardRef, useImperativeHandle, useRef } from "react"

const CustomInput = forwardRef((props, ref) => {
    const inputRef = useRef("");
    useImperativeHandle(ref, () => {
        return {
            focus() {
                inputRef.current.focus();
            },
            blur() {
                inputRef.current.blur();
            },
            getValue() {
                return inputRef.current.value;
            },
            clear() {
                inputRef.current.value = "";
            }
        }
    }, []);


    return (
        <>
            <label htmlFor="">
                {props.label}
            </label>
            <input
                type="text"
                ref={inputRef}
                name=""
                placeholder={props.placeholder}
                onChange={props.onChange}
            />
        </>
    )
})

CustomInput.displayName = CustomInput;
export default CustomInput