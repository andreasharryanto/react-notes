import { useContext } from "react";
import { AppContext } from "./UseContextTutorial";

const InputName = () => {
    const { setUserName } = useContext(AppContext);
    return (
        <div>
            <input onChange={e => setUserName(e.target.value)}/>
        </div>
    )
}

export default InputName;