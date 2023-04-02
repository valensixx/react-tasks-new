import React, { useState } from "react";
import './Contacts.css';

 /*
    Create Contact component like contact form in Facebook.
    The Contact component must take image, online/offline status and name.
    The component takes the lenght of the parent component(width: 100% of the parent).
    Use styles in React as objects
    All avetars are from freepic.com  
*/

export default function Contacts() {
    const[contacts, setContacts] =useState([
        {name:'Ivan Ivanov', avatar: '/images/avatars/1.jpg', status:true},
        {name:'Georgi Georgiev', avatar:'/images/avaters/2.img', status:false},
        {name:'Peter Petrov', avater:'/images/avatars/3.img', status:true},
    ]);
    return (
        <div>

        </div>
    );
};