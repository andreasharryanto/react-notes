import { useEffect } from "react"

export default function Child ({returnComment}) {
    useEffect(() => {
        console.log('function was called');
    }, [returnComment]);

    return <div>{returnComment("nama")}</div>;
}