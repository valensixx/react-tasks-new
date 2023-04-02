import React,{useState} from "react";

export default function ContactsProps(props){
    const styles = {
        container: {
            padding: 20,
            background: '#333',
        }
    };

    

    return(
        <div style={styles.container}>
            {props.contacts.map()}
        </div>
    );
};