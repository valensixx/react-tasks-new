import React, { useState } from "react";

export default function ContactsProps(props) {
    const styles = {
        container: {
            padding: 20,
            background: '#333',
        },
        img: {
            height:50,
        },
    };

    function renderSingleContact(contact) {
        return (
            <div>
                <div>
                    <img style={styles.img} src={contact.avatar} />
                </div>
                <div>
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