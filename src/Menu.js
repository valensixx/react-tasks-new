import React, {useState} from "react";
import MenuProps from "./MenuProps";
import "./MenuProps.css";

/*
Create Menu component that takes array (link and label).
Menu must me responsive.
*/

export default function Menu(){
    const items = [
        {label: 'Home', link: '/'},
        {label: 'About', link: '/'},
        {label: 'Contacts', link: '/'},
    ];
    return(
        <div>
            <MenuProps items = {items} />
        </div>
    );
}