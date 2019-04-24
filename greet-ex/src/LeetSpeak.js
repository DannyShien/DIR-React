import React from 'react';


function LeetSpeak(props) {
    console.log('leetspeak function')
    let newWord = '';
    let word = (props.word);
    console.log(`THIS IS PROPS: `, word);
    for (let i = 0; i < word.length; i++) {
        newWord = newWord + _leetConvert(word[i])
    }
    return (
        <div>
            <h2>{props.word}</h2>
            <h2>{newWord}</h2>
        </div>
    )
}

function _leetConvert(char) {
    console.log('leetConverter function')
    let letters = 'aegiost'.toLowerCase().split('');
    console.log(letters);
    let numbers = '4361057'.toLowerCase().split('');
    let val = char;
    console.log(val);
    if (letters.includes(char)) {
        val = numbers[letters.indexOf(char)];
    }
    return val;
}


export default LeetSpeak;