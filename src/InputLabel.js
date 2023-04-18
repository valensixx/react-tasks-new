import React, { useState } from "react";


/*
Create reusable label input. Input field must take text for the label above, 
text for a placeholder and function onInput
*/

export default function InputLabel(props) {

    return (
        <div>
            <label>
                {props.title}
            </label>
            <input 
                type="text"
                placeholder={props.placeholder}
                onInput={props.onInput}
            />
        </div>
    );
}