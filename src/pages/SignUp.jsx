import React from "react";
import { ToastContainer, toast } from "react-toastify";

import Header from "../components/Header";
import AccountForm from "../components/AccountForm";

function createAccount(formData) {
    const accountDetails = {};
    formData.forEach((value, key) => {
      accountDetails[key] = value;
    });

    if (accountDetails.password !== accountDetails.confirmpassword) {
        toast.error("Passwords do not match!");
    } else {
        // pass into backend api now.
        <Navigate to="/accounts/verification" replace />
    }
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