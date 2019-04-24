// V1. The purpose of this component si to receive some text and display to the page. 
// V2. Add 'translation' (toUpperCase) to the text displayed to page. 

import React from 'react';

function Output(props) {
    return (
        <div>
            {props.text.toUpperCase()}
        </div>
    )
}

export default Output;

