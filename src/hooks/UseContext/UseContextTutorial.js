import { createContext, useState } from "react";
import InputName from "./InputName";
import User from "./User";

export const AppContext = createContext(null);

const UseContextTutorial = () => {
    const [userName, setUserName] = useState("");

    return (
        <AppContext.Provider value={{ userName, setUserName }}>
            <InputName />
            <User />
        </AppContext.Provider>
    )
}

export default UseContextTutorial;