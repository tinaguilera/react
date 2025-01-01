import React from 'react'
import PropTypes from 'prop-types'
const newMeassage = {
    culo:'Martin',
    culito:'Aguilera'
}


const getResult  = (x) => x+x;

export function HelloWorldApp({title,subtitle =123}) {



    return (
        <>
            <h1>{title + subtitle}</h1>
            <code>{JSON.stringify(newMeassage)}</code>
            <p>japa</p>
        </>

    )
}


HelloWorldApp.propTypes ={
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.number
} 


