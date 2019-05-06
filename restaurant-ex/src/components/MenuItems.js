import React from 'react';
import PropTypes from 'prop-types';

function MenuItems(props) {
    console.log(props);
    return(
        <div>
            {
                props.MenuItems.map((item, i) => <div key={i}>{item}</div>)
            }
        </div>
    );
}

MenuItems.propTypes = {
    items: PropTypes.array.isRequired
};

export default MenuItems; 