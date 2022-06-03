import React, { useReducer, useState } from "react";

// const UseReducerTutorial = () => {
//     const [count, setCount] = useState(0);
//     const [showText, setShowText] = useState(false);

//     return (
//         <div>
//             <h1>{count}</h1>
//             <button onClick={() => {
//                 setCount(count + 1);
//                 setShowText(!showText);
//             }}>
//                 add
//             </button>
//             {showText && <p>swift</p>}
//         </div>
//     )
// }

const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {count: state.count + 1, showText: state.showText};
        case "TOGGLE_SHOW":
            return {count: state.count, showText: !state.showText};
        default:
            return state;
    }
}

const UseReducerTutorial = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0, showText: true});

    return (
        <div>
            <h1>{state.count}</h1>
            <button onClick={() => {
                dispatch({ type: "INCREMENT" });
                dispatch({ type: "TOGGLE_SHOW" });
            }}>
                add
            </button>
            {state.showText && <p>swift</p>}
        </div>
    )
}

export default UseReducerTutorial;