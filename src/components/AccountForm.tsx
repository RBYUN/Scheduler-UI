import React, { type JSX } from "react";

import PasswordPolicy from "./PasswordPolicy.tsx";
import type { AccountFormField, AccountFormInput } from "../types/index.ts";

type AccountFormProps = {
    inputs: AccountFormField[];
    //get rid of ?. Action will always be required.
    action?: (formData: FormData) => Promise<void>;
    title: string;
    button: string;
    passwordBox: boolean;
};

function PasswordInput({text, id}: AccountFormInput ): JSX.Element {
    const pattern: string = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$";

    const [showPolicy, setShowPolicy] = React.useState(false);
    const [currentPass, setCurrentPass] = React.useState("");
    
    const [isGoodLen, setIsGoodLen] = React.useState(false);
    const [hasUpperCase, setHasUpperCase] = React.useState(false);
    const [hasLowerCase, setHasLowerCase] = React.useState(false);
    const [hasDigit, setHasDigit] = React.useState(false);
    const [hasSpecialChar, setHasSpecialChar] = React.useState(false);
    const digitRegex: RegExp = /\d/;
    const specialCharsRegex : RegExp = /[@$!%*?&]/;

    function setPasswordInput(event: React.ChangeEvent<HTMLInputElement>): void {
        const { value } = event.currentTarget;
        setCurrentPass(value);
        setIsGoodLen(value.length >= 8);
        setHasUpperCase(value !== value.toLowerCase());
        setHasLowerCase(value !== value.toUpperCase());
        setHasDigit(digitRegex.test(value));
        setHasSpecialChar(specialCharsRegex.test(value));
    }

    return (
        <>
            <input 
                className="account-input" 
                name={id} 
                id={id} 
                type="password"
                placeholder={text} 
                pattern={pattern}
                key={id}
                onChange={setPasswordInput}
                value={currentPass}
                onFocus={() => setShowPolicy(true)}
                onBlur={() => setShowPolicy(false)}
                required>
            </input>
            <PasswordPolicy 
                showPolicy={showPolicy} 
                isGoodLen={isGoodLen}
                hasUpperCase={hasUpperCase}
                hasLowerCase={hasLowerCase}
                hasDigit={hasDigit}
                hasSpecialChar={hasSpecialChar}/>
        </>
    )
}

function setInputFields(inputs: AccountFormField[], isPasswordBox: boolean): JSX.Element | JSX.Element[] {
    return( 
        inputs.map((input) => {
            if (input.group) {
                return (
                    <div className="flex" key={input.id}>
                        {input.group.map((groupInput) => {
                            let name: string = groupInput.text.toLowerCase().replace(" ", "");
                            return (
                                <input 
                                    className="account-input-multiple" 
                                    key={groupInput.id}
                                    name={name} 
                                    id={groupInput.id} 
                                    type="text" 
                                    placeholder={groupInput.text} 
                                    required>
                                </input>
                            )})}
                    </div>
                )
            } else if (input.text === "Password" && isPasswordBox === true) {
                return (
                    <PasswordInput text={input.text} id={input.id} />
                )
            } else {
                const name: string = input.text!.toLowerCase().replace(" ", "");
                return (
                    <input 
                        className="account-input" 
                        name={name} 
                        id={name} 
                        type={input.text === "Confirm Password" || input.text === "Password" ? "password" : "text"} 
                        placeholder={input.text} 
                        key={input.id}
                        required>
                    </input>)}}
        ));
}

export default function AccountForm({ inputs, action, title, button, passwordBox }: AccountFormProps) {
    
    const inputFields = setInputFields(inputs, passwordBox);
    
    return (
        <>
            <form className="account-form" action={action}>
                <h1>{title}</h1>
                {inputFields}
                <button>{button}</button>
            </form>
        </>
    );

}