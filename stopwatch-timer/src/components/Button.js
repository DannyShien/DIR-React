import React from 'react';

function Button ({toggle, handleStart, handleStop}) {
    // console.log(props)
    return(
        <>
            <button
                onClick={handleStart}
            >{toggle ? `Stop` : `Start`}</button>
            <button
                onClick={handleStop}
            >RESET</button>
        </>    
    );

}


export default Button;