import React, { useState } from "react";
import ContactsProps from "./ContactsProps";

 /*
    Create Contact component like contact form in Facebook.
    The Contact component must take image, online/offline status and name.
    The component takes the lenght of the parent component(width: 100% of the parent).
    Use styles in React as objects
    All avetars are from freepic.com  
*/

export default function Contacts() {
    const[contacts, setContacts] =useState([
        {name:'Ivan Ivanov', avatar: '/images/avatars/img1.jpg', status:true},
        {name:'Georgi Georgiev', avatar:'/images/avatars/img2.jpg', status:false},
        {name:'Peter Petrov', avatar:'/images/avatars/img3.jpg', status:true},
    ]);
    return (
        <div>
            < ContactsProps contacts = {contacts} />
        </div>
    );
};