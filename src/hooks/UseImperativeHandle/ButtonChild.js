import { forwardRef, useImperativeHandle, useState } from "react"

const ButtonChild = forwardRef((props, ref) => {
    let [toggle, setToggle] = useState(false);

    useImperativeHandle(ref, () => ({
        alterToggle() {
            setToggle(!toggle);
        }
    }))

    return (
        <>
            <button onClick={() => setToggle(!toggle)}>Child</button>
            {toggle && <h1>Toggle</h1>}
        </>
    )
});

export default ButtonChild;