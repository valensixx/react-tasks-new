import {useState} from 'react';
import Label from './Label';

export default function Input(){

    const [text, setText] = useState('');
    
    const changeText = (event) => {
        setText(event.target.value);
        // console.log(text);
    }

    return (
        <div>
            <Label label={text}></Label>
            <input type="text" onChange={changeText}></input>
        </div>
    )
}