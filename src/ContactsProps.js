import React, { useState } from "react";

export default function ContactsProps(props) {
    const styles = {
        container: {
            padding: 20,
            background: '#333',
        },
        img: {
            height:50,
            width:50,
            marginTop: 10,
            borderRadius: '50%',
        },
        nameContainer: {
            color: 'white',
            marginLeft:10,
        },
        innerContainer:{
            display: 'flex',
            alignItems: 'center',
        }
    };

    function renderSingleContact(contact) {
        return (
            <div style={styles.innerContainer}>
                <div>
                    <img style={styles.img} src={contact.avatar} />
                </div>
                <div style={styles.nameContainer}>
                    {contact.name}
                </div>
            </div>
        );
    };

    return (
        <div style={styles.container}>
            {props.contacts.map(renderSingleContact)}
        </div>
    );
};