import { useRef } from "react";
import ButtonChild from "./ButtonChild"

const UseImperativeHandleTutorial = () => {
    const buttonRef = useRef(null);
    return (
        <div>
            <button onClick={() => {buttonRef.current.alterToggle()}}>Parent</button>
            <ButtonChild ref={buttonRef}/>
        </div>
    )
}

export default UseImperativeHandleTutorial;