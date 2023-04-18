import React, { useState } from "react";
import InputLabelProps from "./InputLabelProps";

/*
Create reusable label input. Input field must take text for the label above, 
text for a placeholder and function onInput
*/

export default function InputLabel(props) {
    const styles={
        title:{
            fontWeight: 700,
            textTransform: 'uppercase',
        },
        input: {
            display: 'block',
            width: '100%',
            padding: 10,
            fontSize: 20,
        }
    }
    return (
        <div>
            <label style={styles.title}>
                {props.title}
            </label>
            <input 
                type="text"
                placeholder={props.placeholder}
                onInput={props.onInput}
                style={styles.input}
            />
        </div>
    );
}