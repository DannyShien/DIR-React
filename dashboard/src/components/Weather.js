import React, { Component } from 'react';

import Search from './Search';

class Weather extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            name: '', 
             
        })
    }

    render() {
        return (
            <div>
                <h1>WEATHER</h1>
                <div>
                    <h4>Search for a city's weather</h4>
                    <Search  
                        
                    />
                </div>
            </div>
        )
    }

    searchInput = (input) => {
        console.log(input);
    }





}
 export default Weather;