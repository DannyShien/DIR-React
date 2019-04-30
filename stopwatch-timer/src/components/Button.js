import React from 'react';

function Button (props) {
    return(
        <button
            onClick={props.handleStart}
        >Start</button>
    );


}


export default Button;