import React from 'react';

function CustomInput(props) {
    return(
        <div>
            <input 
                onChange={props.handleInput}
            />
        </div>
    )
};  

export default CustomInput;