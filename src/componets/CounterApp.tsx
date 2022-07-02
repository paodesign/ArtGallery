import { useState } from 'react';
import './CounterApp.css';




function CounterApp({ value }: Props) {
    const [ counter, setCounter] = useState(value);


    return (
        <>
            <h1>CounterApp</h1>
            <h2> {counter} </h2>
            <button
                onClick={() => setCounter((c)=> c+1) }>
                +1
            </button>
            <button
                onClick={() => setCounter((c)=> c-1) }>
                -1
            </button>
            <button
                onClick={() => setCounter(value) }>
               Reset
            </button>
        </>
    );
}

type Props = {
    value: number;
}

export default CounterApp;