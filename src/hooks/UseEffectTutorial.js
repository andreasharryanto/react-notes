import React, { useEffect, useState } from "react";
import axios from "axios";

function UseEffectTutorial() {
    const [data, setData] = useState("");
    const [count, setCount] = useState(0);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
            .then((response) => {
                console.log(response);
                setData(response.data[0].email);
            });
    }, [count]);

    return (
        <div>
            <div>hello world {data}</div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>
                add
            </button>
        </div>
    );
}

export default UseEffectTutorial;