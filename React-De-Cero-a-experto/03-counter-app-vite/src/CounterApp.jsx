import {useState} from 'react';
import React from 'react'
import PropTypes from 'prop-types'




export const CounterApp = ({ value }) => {
    const [counter,setCounter] = useState(value);
    const sum = () => {
        setCounter(counter+1);  
    }
    const sub = () => {
        setCounter(counter-1);  
    }
    const reset = ()=>{
        setCounter(value)
    }
    return (
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>
            <button onClick={sub} >-</button>
            <button onClick={sum} >+</button>
            <button onClick={reset} >Reset</button>


        </>

    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}