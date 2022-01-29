// import react & state
import React, { useState } from 'react';
import logo from './logo.svg';


export default function App() {

    // create a counter variable as a state
    const [counter, setCounter] = useState(0);
    // create a function that increments the counter variable
    const incrementCounter = () => {
        setCounter(counter + 1);
    }
    // display counter variable as div
    const display = <div>{counter}</div>;
    // display incrementCounter function as button
    const button = <button onClick={incrementCounter}>Click Me</button>;
    // return the display and button
    return (
        <div>
            {display}
            {button}
        </div>
    );

}
