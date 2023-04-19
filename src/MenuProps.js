import React, { useState } from "react";

export default function MenuProps(props) {
    const [isShown, setIsShown] = useState(false);
    return (
        <nav className="menu">
            <button className="d-hide" onClick={() => {
                setIsShown(!isShown);
            }}>
                <i className="fa fa-bars"></i>
            </button>
            <ul className={!isShown && "m-hide"}>
                {props.items.map(item =>
                    <li>
                        <a href={item.link}>{item.label}</a>
                    </li>
                )}
            </ul>
        </nav>
    );
}