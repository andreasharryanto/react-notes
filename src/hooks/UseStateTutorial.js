import React, { useState }  from "react";

// const UseStateTutorial = () => {
//     let counter = 0;

//     const increase = () => {
//         counter = counter + 1;
//         console.log(counter);
//     }

//     return (
//         <div>
//             {counter}
//             <button onClick={increase}>
//                 increase
//             </button>
//         </div>
//     )
// }

const UseStateTutorial = () => {
    const [counter, setCounter] = useState(0);
    const [name, setName] = useState("logitech");

    const increase = () => {
        setCounter(counter + 1);
    }

    const nameChangeHandler = event => {
        setName(event.target.value);
    }

    return (
        <div>
            <div>
                <button onClick={increase}>
                    add
                </button>
                {counter}
            </div>

            <div>
                <input placeholder="type something" onChange={nameChangeHandler} />
                {name}
            </div>
        </div>
    )
}

export default UseStateTutorial;