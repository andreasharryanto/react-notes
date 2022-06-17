import { useEffect, useLayoutEffect, useRef } from "react";

const UseLayoutEffectTutorial = () => {
    const inputRef = useRef(null);

    // useLayoutEffect is called earlier
    useLayoutEffect(() => {
        // console.log("useLayoutEffect");
        console.log(inputRef.current.value);
    }, []);

    useEffect(() => {
        // console.log("useEffect");
        inputRef.current.value = "World";
    }, []);

    return <div>
        <input ref={inputRef} defaultValue="Hello" />
    </div>;
};

export default UseLayoutEffectTutorial;