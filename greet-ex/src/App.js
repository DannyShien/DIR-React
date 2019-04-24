import React from 'react';
import './App.css';

import LowerCase from './LowerCase';
// import LeetSpeak from './LeetSpeak';
import CaesarCipher from './CaesarCipher';
function App() {
    return (
        <div className="App">  
            <h1>LOWERCASING</h1>
            <LowerCase 
                name='StaNLeY'
            />

            <h1>LEETSPEAK</h1>
            {/* <LeetSpeak 
                word='leet'
            /> */}
            <h1>CAESARCIPHER</h1>
            <CaesarCipher 
                name='rockclimbing'
            />

        </div>
    );
}  

export default App;
