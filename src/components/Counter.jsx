import React, {useState} from 'react'

const Counter = () => {

    const [count, setCount] = useState(0);

    const decrementNumber = () => {
        setCount(count - 1 );
    }

    const incrementNumber = () => {
        setCount(count + 1 );
    }

    const resetNumber = () => {
        setCount(0);
    }

    return (
        <div>
            <div className="counter-container">
                <p className="number-state">{count}</p>
                <button className="counter-button" onClick={decrementNumber}>Decrement</button> &nbsp;&nbsp;
                <button className="counter-button" onClick={resetNumber}>Reset</button> &nbsp;&nbsp;
                <button className="counter-button" onClick={incrementNumber}>Increment</button>
            </div>
        </div>
    )
}

export default Counter;
