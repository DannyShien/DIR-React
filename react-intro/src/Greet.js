// Your custom components should start with a capital letter.

// #1 Import React
import React from 'react';
// If we were doing Node, we would have written:
// const React = require('react');

function excitedName(aName) {
    return aName.toUpperCase();
}

// #3 Declare your component
function Greet(props) {
    // Every component must return a React Element.
    return (
        <h1>
            Hello {props.whom ? excitedName(props.whom) : "You"}!
        </h1>
    );
}

// #2 Export your component
// Make the component name match the file name.
// By `default`, if someone imports from Greet.js, they should receive our Greet component.
export default Greet; 