import React, { Component } from 'react';
import Output from './Output';

class Translator extends Component {
    constructor(props) {
        super(props); 

        this.state = { 
            input: ''
        };
    }

    
    render () {
        
        const names = ['stan', 'natalie', 'david'];

        return (
            <div>
                <input 
                    onChange={this.updateInput}
                />

                <Output 
                    text={this.state.input}
                />       
                <ul>
                    {names.map (name => <li>(name)</li>)}
                </ul>

            </div>
        )
    }

    updateInput = (e) => {
        console.log('OVERRIDING onChange event!');
        // console.log(e.tartget.value); 
        // This is a request for a change that will take place in the future. 
        this.setState({
            input: e.target.value
        }, () => {
            console.log(`STATE HAS BEEN UPDATED: ${this.state.input}`)
        });
    }


}

export default Translator; 