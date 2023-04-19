import React from "react";

export default function MenuProps(props) {
    return (
        <nav className="menu">
            <ul>
                {props.items.map(item =>
                    <li>
                        <a href={item.link}>{item.label}</a>
                    </li>
                )}
            </ul>
        </nav>
    );
}