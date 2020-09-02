import React from "react";
import {useState} from "react";

function useInputState(initialVal, action) {
    const [value, setValue] = useState(initialVal);
    const handleChange = e => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        action(value)
    }
    const reset = () => {
        setValue("");
    }

    return [value, handleChange, handleSubmit, reset];
}

export default useInputState;