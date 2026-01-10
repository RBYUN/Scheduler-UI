import { toast } from "react-toastify";
import { useNavigate } from "react-router";

import Header from "../../components/Header.tsx";
import AccountForm from "../../components/AccountForm.tsx";
import type { AccountDetails, AccountFormField, Button } from "../../types/index.ts";

export default function SignUp() {
    let navigate = useNavigate();

    async function createAccount(formData: FormData): Promise<void> {
    
        const accountDetails: AccountDetails = {
            fullName: {
                firstName: "",
                lastName: "",
            },
            email: "",
            password: "",
            confirmPassword: "",
        };
    
        formData.forEach((value, key) => {
            if (typeof value !== "string") return; // skip files

            switch (key) {
              case "firstName":
                accountDetails.fullName.firstName = value;
                break;
              case "lastName":
                accountDetails.fullName.lastName = value;
                break;
              case "email":
                accountDetails.email = value;
                break;
              case "password":
                accountDetails.password = value;
                break;
              case "confirmPassword":
                accountDetails.confirmPassword = value;
                break;
            }
          });
    
        if (accountDetails.password !== accountDetails.confirmPassword) {
            toast.error("Passwords do not match!", {autoClose: 5000});
        } else {
            try {
                const response = await fetch(
                    "http://localhost:3000/v1/accounts/create", {
                    method: "POST",
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
                    toast.error("Email already exists", {autoClose: 5000});
                } else {
                    navigate("/error")
                }
            } catch (error) {
                navigate("/error")
            }
        }
    }

    const buttons: Button[] = [{
        text: "LOGIN",
        link: "../login",
        id: "login"
    }]

    const inputs: AccountFormField[] = [
        {
            group: [
                {
                    text: "First Name",
                    id: "firstName"
                },
                {
                    text: "Last Name",
                    id: "lastName",
                },
            ],
            id: "fullName",
        },
        {
            text: "Email",
            id: "email",
        },
        {
            text: "Password",
            id: "password",
        },
        {
            text: "Confirm Password",
            id: "confirmPassword",
        },
    ]

    return(
        <>
            <Header buttons={buttons} className="account-buttons"/>
            <AccountForm inputs={inputs} action={createAccount} title="Create an Account" button="CREATE" passwordBox={true}/>
        </>
    )
}