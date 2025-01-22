import React from "react";
import "./Header.css"

export default function Header(props) {
    return (
        <div className="header">
            {/* also want to add hamburger menu */}
            <h1>{props.title}</h1>
            <p>{props.subtitle}</p>
        </div>
    );
}