import { useCallback, useState } from "react";
import Child from "./Child";

export default function UseCallBackTutorial () {
    const [toggle, setToggle] = useState(false);
    const [data, setData] = useState('Qwer Asdf');

    const returnComment = useCallback(name => data + name, [data]);

    return (
        <div>
            <Child returnComment={returnComment} />
            <button onClick={() => setToggle(!toggle)}>
                Toggle
            </button>
            {toggle && <h3>toggle</h3>}
        </div>
    );
}