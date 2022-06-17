import { useContext } from "react";
import { AppContext } from "./UseContextTutorial";


const User = () => {
    const ctx = useContext(AppContext);
    return (
        <div>
            <h3>User: {ctx.userName}</h3>
        </div>
    );
};

export default User;