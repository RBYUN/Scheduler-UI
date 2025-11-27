import React from "react";
import { Link } from "react-router";

export default function SignUp() {

    return(
        <div className="signup-background">
            <h1>Create a New Account</h1>
            <div className="center-container">
                <form className="center-container flex signup">
                    <div className="flex-column">
                        <input className="login-input" id="firstName" name="firstName"
            type="text" placeholder="First Name"/>
                        <input className="login-input" id="lastName" name="lastName"
            type="text" placeholder="Last Name"/>
                        <input className="login-input" id="email" name="email"
                type="text" placeholder="Email Address"/>
                        <input className="login-input" id="password" name="password"
                type="password" placeholder="Password"/>
                        <div className="flex">
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}