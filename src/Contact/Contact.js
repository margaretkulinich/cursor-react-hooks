import React from "react";
import "./styles.css";
import { getGenderIcon } from "./helpers.js"

export default function Contact(props) {
    const { firstName, lastName, gender } = props;
    
    return (
        <li className="contact">
            <span>{firstName} {lastName}</span>

            <div className="gender">{getGenderIcon(gender)}</div>
        </li>
    )
}