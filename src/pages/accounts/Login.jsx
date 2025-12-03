import { useSearchParams } from "react-router";
import { toast } from "react-toastify";

import Header from "../../components/Header";
import AccountForm from "../../components/AccountForm";
import { useEffect } from "react";

export default function Login() {
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        async function getSearchParams() {
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
                } catch (error) {
                    toast.error("An error occurred while verifying the account.");
                    console.error("Error during verification:", error);
                }
            }
        }
        getSearchParams();
    },[])

    async function signIn() {

    }
    
    const buttons = [
        {
            "text": "SIGN UP",
            "action" : null,
            "link": "../create"
        }
    ];

    const inputs = [
        "Email",
        "Password"
    ];

    return(
        <>
            <Header buttons={buttons} class="account-buttons"/>
            <AccountForm inputs={inputs} title="Welcome Back" button="LOGIN" passwordBox={false}/>   
        </>
    )
}