 import React from "react";


export default function InputLabelProps(props){
    const styles ={
        title:{
            fontWeight: 700,
            textTransform: 'uppercase'
        },
        input:{
            display: 'block',
            width: '100%',
            padding: 10,
            fontSize: 20,
        }
    }
    return(
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