import React from 'react';

class ClickyCounter extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            number: props.startAt || 0     // use props.startAt if truthy, otherwise, use 0
        };
    }

    render() {
        return (
            <div>
                <h3>{this.state.number}</h3>
                <button
                    onClick={this.incrementNumber}  
                >+</button>
                <button
                    onClick={this.decrementNumber}
                >-</button>
            </div>
        );
    }

    incrementNumber = () => {
        this.setState({
            number: this.state.number + 1
        });
    }

    decrementNumber = () => {
        this.setState({
            number: this.state.number - 1
        });
    }
}



export default ClickyCounter;