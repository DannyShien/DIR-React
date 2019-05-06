import React from 'react';

function RestaurantList(props) {
    console.log(props);
    return (
        <div>{
            props.restaurants.map((restaurant, i) => {
                console.log(restaurant);
                return (
                    <div key={i}>
                        <a
                            href='#'
                            onClick={() => {
                                props.handleClick(restaurant);
                            }}
                        >
                        {restaurant}</a>
                    </div>
                )
            })
        }
        </div>
    );
}

export default RestaurantList;