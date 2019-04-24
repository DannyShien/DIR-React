import React, { Component } from 'react';

function LowerCase(props) {
    const toLowercase = props.name.toLowerCase();
    return (
        <div>
            <h2>Input: {props.name}</h2>
            <h2>Lower-case: {toLowercase} </h2>
        </div>
    )
}


export default LowerCase; 