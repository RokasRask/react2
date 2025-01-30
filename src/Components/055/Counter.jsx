import { useEffect, useState } from "react";

export default function Counter({ counter, setCounter }) {

    const [doubleCounter, setDoubleCounter] = useState(0);

    const count = () => {
        setCounter((c) => c + 1);
    };

    const anticount = () => {
        setCounter((c) => c - 1);
    };

    const reset = () => {
        setCounter(0);
    };

    useEffect(() => {
        setDoubleCounter(counter * 2);
    }, [counter]);

    return (
        <div>
            <h2>{doubleCounter}</h2>
            <button className="green" onClick={count}>+1</button>
            <button className="red" onClick={reset}>Reset</button>
            <button className="blue" onClick={anticount}>-1</button>
        </div>
    );
}
