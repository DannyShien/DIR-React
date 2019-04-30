import React, { Component } from 'react';

import Button from './Button';

class Stopwatch extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            timer: 0, 
            isCounting: false
        }
    }

    render() {
        return (
            <div>
                <h1>00:00:00</h1>
                <Button 
                    handleStart={this.start}
                />

            </div>
        )
    }

    start = () => {

    }

}


export default Stopwatch;
