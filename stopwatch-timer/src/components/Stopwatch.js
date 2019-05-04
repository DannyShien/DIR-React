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
                    toggle={this.state.isCounting}  
                    handleStop={this.stopTimer}
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
            console.log(this.state.isCounting)
            this.count = setInterval(() => {
                this.setState({
                    timer: this.state.timer + 1
                })
            }, 1000)
        } else {
            this.setState({
                // timer: this.state.timer,
                isCounting: false
            })
        }
    }

    stopTimer = () => {
        this.setState({
            isCounting: false
        })
        if(this.state.isCounting) {
            console.log('Reset')
            console.log(this.state.isCounting)
            this.setState({
                timer: 0
            })    
            clearInterval(this.count)
        };
    }

}


export default Stopwatch;
