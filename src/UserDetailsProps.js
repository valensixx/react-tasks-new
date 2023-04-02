import React from "react";

export default function UserDetailsProps(props){
    return(
        <>
            <h2>{props.name} - {props.age}</h2>
            <ul>
                {props.interests.map(i=> <li>{i}</li>)}
            </ul>
        </>
    );
};