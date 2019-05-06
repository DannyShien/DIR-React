import React from 'react';

function RestaurantType(props) {
    console.log(props);
    return (
        <div>{
            // Using explicit return, so that we can have multiple statements
            props.restaurantType.map((type, i) => {
                console.log(type)
                return (
                    <div key={i}>
                        <a
                            href='#'
                            onClick={() => {
                                // When you need to pass something other than the even, you need an anonymous function 
                                props.handleClick(type);
                            }}    
                        >
                        {type}</a>
                    </div>
                )
            })
        }
        </div>
    );
}


export default RestaurantType;