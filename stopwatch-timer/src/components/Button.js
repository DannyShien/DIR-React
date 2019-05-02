import React from 'react';

function Button ({toggle, handleStart}) {
    // console.log(props)
    return(
        <button
            onClick={handleStart}
        >{toggle ? `Stop` : `Start`}</button>
    );

}


export default Button;