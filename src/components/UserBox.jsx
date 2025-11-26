import React from "react";
import { Link } from "react-router";

export default function UserBox() {
    return(
        <div className="flex">
            <img src="../assets/UserIcon.png" alt="Profile Picture"></img>
            <Link to="/login">
                <button className="login-button">SIGN UP/LOGIN</button>
            </Link>
        </div>
    );
}