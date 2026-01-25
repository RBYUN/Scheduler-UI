import { useSearchParams } from "react-router";
import { toast } from "react-toastify";

import Header from "../../../components/Header.tsx";
import AccountForm from "../../../components/AccountForm.tsx";
import { useEffect } from "react";
import type { AccountFormField, Button } from "../../../types/index.ts";

export default function Login() {
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        async function getSearchParams(): Promise<void> {
            if (searchParams.get("verified")  === "true") {
                try {
                    const response = await fetch(
                        `http://localhost:3000/v1/accounts/verify?id=${searchParams.get("id")}`, {
                            method: "Post",
                            headers: {
                                "Accept": "application/json",
                                "Content-Type": "application/json"
                            }
                        });
                console.log(response)
                if (response.ok) {
                    toast("Your account has been verified");
                    setSearchParams({});
                } else {
                    toast.error("Verification failed, please try again.");
                    }
                } catch (error: unknown) {
                    toast.error("An error occurred while verifying the account.");
                    console.error("Error during verification:", error);
                }
            }
        }
        getSearchParams();
    },[])

    
    const buttons: Button[] = [
        {
            text: "SIGN UP",
            link: "../create",
            id: "signup",
        },
    ];

    const inputs: AccountFormField[] = [
        {
            text: "Email",
            id: "email",
        },
        {
            text: "Password",
            id: "password",
        },
    ];

    return(
        <>
            <Header buttons={buttons}/>
            <AccountForm inputs={inputs} title="Welcome Back" button="LOGIN" passwordBox={false}/>   
        </>
    )
}