import React, { Component } from 'react';
import Output from './Output';
import CustomInput from './CustomInput';

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
                <ul>{
                    names.map ((name, i) => (
                    <li key={i}>{name}</li>))
                }
                </ul>
                {/* <input 
                    onChange={this.updateInput}
                /> */}

                <CustomInput 
                    handleInput={this.updateInput}
                />


                <Output 
                    text={this.state.input}
                />       

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