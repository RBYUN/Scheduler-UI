import React from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

import Header from "../../components/Header";
import AccountForm from "../../components/AccountForm";

export default function SignUp() {
    let navigate = useNavigate();

    async function createAccount(formData) {
    
        const accountDetails = {};
    
        formData.forEach((value, key) => {
          accountDetails[key] = value;
        });
    
        if (accountDetails.password !== accountDetails.confirmpassword) {
            toast.error("Passwords do not match!", 5000);
        } else {
            try {
                const response = await fetch(
                    "http://localhost:3000/v1/accounts/create", {
                    method: "Post",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(accountDetails)
                });
                
                console.log(response.status);

                if (response.ok) {
                    navigate("/accounts/verification")
                } else if (response.status === 409) {
                    console.log("here");
                    toast.error("Email already exists", 5000);
                } else {
                    navigate("/error")
                }
            } catch (error) {
                navigate("/error")
            }
        }
    }

    const buttons = [{
        "text": "LOGIN",
        "action" : null,
        "link": "../login"
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