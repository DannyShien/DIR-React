import React, { Component } from 'react';

import Button from './Button';

class Stopwatch extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            timer:  0,
            isCounting: false
        }
    }

    render() {
        return (
            <>
                <h1>{this.state.timer}</h1>
                <Button 
                    handleStart={this.startTimer}
                    toggle={this.startTime}  
                />

            </>
        )
    }

    startTimer = () => {
        this.setState({
            isCounting: true
        })
        if(!this.state.isCounting) {
            console.log('Counting')
            this.count = setInterval(() => {
                this.setState({
                    timer: this.state.timer + 1
                })
            }, 1000)
        };
    }

    stopTimer = () => {
        this.setState({
            isCounting: false
        });
        clearInterval(this.count)
    }

}


export default Stopwatch;
