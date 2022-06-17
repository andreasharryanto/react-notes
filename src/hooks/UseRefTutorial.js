import React, { useRef } from "react";

const UseRefTutorial = () => {
    const inputRef = useRef(null);

    const onClickChange = () => {
        console.log(inputRef.current.value);
    };

    const onClickFocus = () => {
        inputRef.current.focus();
    }

    const onClickClear = () => {
        inputRef.current.value = "";
    }

    return <div>
        <input type="text" placeholder="Ex..." ref={inputRef} />
        <button onClick={onClickChange}>change</button>
        <button onClick={onClickFocus}>focus</button>
        <button onClick={onClickClear}>clear</button>
    </div>;
}

export default UseRefTutorial;