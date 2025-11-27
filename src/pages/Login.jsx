import React from "react";
import { Link } from "react-router";

export default function Login() {

    return(
        <div className="login-background">
            <h1>Log in</h1>
            <div className="center-container">
                <form className="center-container flex login">
                    <Link to="/" className="text-link">
                        <p>LET'S<br/>MEET</p>
                    </Link>
                    <div className="flex-column">
                        <input className="login-input" id="email" name="email"
            type="text" placeholder="Email Address"/>
                        <input className="login-input" id="password" name="password"
            type="password" placeholder="Password"/>
                        <div className="flex">
                        <Link to="/accounts/create">
                            <button className="login-input-options">Sign Up</button>
                        </Link>
                        <Link to="/accounts/forgot">
                            <button className="login-input-options">Forgot Password</button>
                        </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}