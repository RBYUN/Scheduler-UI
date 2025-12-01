import React from "react";

import Header from "../components/Header";
import AccountForm from "../components/AccountForm";


function createAccount(formData) {
    const accountDetails = {};
    formData.forEach((value, key) => {
      accountDetails[key] = value;
    });
    console.log(accountDetails);
}

export default function SignUp() {
    const buttons = [{
        "text": "LOGIN",
        "action" : null,
        "link": null
    }]

    const inputs = [
        ["First Name", "Last Name"],
        "Email",
        "Password",
        "Confirm Password"
    ]

    return(
        <>
            <Header buttons={buttons} class="account-buttons"/>
            <AccountForm inputs={inputs} buttons={buttons} action={createAccount}/>
        </>
    )
}