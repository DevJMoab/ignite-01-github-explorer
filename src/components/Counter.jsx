import { useState } from "react";

export function Counter(){
    const [counter, setCounter] = useState(0);
    
    function increment(){
        setCounter(counter)
    }
    function decrement(){
        setCounter(counter)
    }

    return(
        <div>
            <h2>{counter}</h2>
            <button type="button" onClick={decrement}>
                decrement
            </button>
            <button type="button" onClick={increment}>
                increment
            </button>
            
        </div>
    );
}