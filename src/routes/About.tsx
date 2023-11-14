import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function About() {
    const [count, setCount] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        if (count > 5) {
            navigate('/home');
        }
    }, [count]);

    const handleIncrement = useCallback(() => {
        setCount(count + 1);
    }, [count]);

    return (
        <div>
            <h1>About</h1>
            <div>{count}</div>
            
            <button onClick={handleIncrement}>go Home</button>
        </div>
    )
}