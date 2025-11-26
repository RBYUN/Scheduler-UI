import React from "react";
import { Link } from "react-router";

export default function Login() {
    return(
        <div className="login-background">
            <div className="center-container">
                <form className="login center-container flex">
                    <Link to="/" className="text-link">
                        <p>LET'S<br/>MEET</p>
                    </Link>
                    <div className="flex-column">
                        <input className="login-input" type="text" id="email" name="email" placeholder="Email Address"/>
                        <input className="login-input" type="password" id="password" name="password" placeholder="Password"/>
                    </div>
                </form>
            </div>
        </div>
    )
}