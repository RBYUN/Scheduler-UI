import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { object, string } from "yup";

import Header from "../../../components/Header.tsx";
import { sections } from "../data/index.ts";

import type { Button } from "../../../types/index.ts";

export default function SignUp() {

    let accountSchema = object({
        firstName: string().required(),
        lastName: string().required(),
        email: string().email(),
        password: string().required(),
        confirmPassword: string().required()
    });    
    
    type FormValues = {
        firstName: string,
        lastName: string,
        email: string,
        password: string,
        confirmPassword: string,
    }

    const { register, watch, handleSubmit, formState: { isSubmitting, errors } } = useForm<FormValues>();

    console.log(errors)

    if (isSubmitting && errors) {
        toast.error("All fields need to be filled out");
    }

    const buttons: Button[] = [{
        text: "LOGIN",
        link: "../login",
        id: "login"
    }]

    const inputClassMultiple: string = "account-input-multiple";
    const inputClass: string = "account-input";



    return(
        <>
            <Header buttons={buttons} sections={sections}/>
            <form className="account-form" onSubmit={handleSubmit((data) => {
                console.log(data);
            })}>
                <h1>Create a New Account</h1>
                <div className="flex">
                    <input {...register("firstName", { 
                        required: true, 
                        pattern: /^[A-Za-z]+$/,
                        minLength: 2,
                        maxLength: 25
                    })}
                        className={inputClassMultiple}
                        placeholder="First Name"
                        key="firstName"
                    />
                    <input {...register("lastName", { 
                        required: true, 
                        pattern: /^[A-Za-z]+$/,
                        minLength: 2,
                        maxLength: 25
                    })}
                        className={inputClassMultiple}
                        placeholder="Last Name"
                        key="lastName"
                    />
                </div>
                <input {...register("email", { 
                    required: true,
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    maxLength: 255
                })}
                    className={inputClass}
                    placeholder="Email"
                />
                <input {...register("password", { 
                    required: true,
                    pattern: /^[A-Za-z0-9!@$%*?]+$/
                })}
                    className={inputClass}
                    type="password"
                    placeholder="Password"
                />
                <input {...register("confirmPassword", { 
                    required: true,
                    validate: (val: string) => {
                        if (watch('password') != val) {
                            return "Your passwords do not match"
                        }
                    }
                })}
                    className={inputClass}
                    type="password"
                    placeholder="Confirm Password"
                />
                <button>Sign Up</button>
            </form>
        </>
    )
}