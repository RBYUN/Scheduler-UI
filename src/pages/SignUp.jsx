import React from "react";

import AccountInput from "../components/AccountInput";

export default function SignUp() {
    const inputs = [
        {
            "name": "firstName",
            "type": "text",
            "placeholder": "First Name"
        },
        {
            "name": "lastName",
            "type": "text",
            "placeholder": "Last Name"
        },
        {
            "name": "email",
            "type": "text",
            "placeholder": "Email Address"
        },
        {
            "name": "password",
            "type": "password",
            "placeholder": "Password"
        }
    ];

    return(
        <AccountInput inputs={inputs} buttons={[]} page="signUp"/>
    )
}