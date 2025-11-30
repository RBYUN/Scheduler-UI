import React from "react";

import PasswordPolicy from "./PasswordPolicy";

function setPasswordInput(password, index) {
    const name = password.toLowerCase().replace(" ", "");

    const pattern = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$";

    const [showPolicy, setShowPolicy] = React.useState(false);
    const [currentPass, setCurrentPass] = React.useState("");
    
    const [isGoodLen, setIsGoodLen] = React.useState(false);
    const [hasUpperCase, setHasUpperCase] = React.useState(false);
    const [hasLowerCase, setHasLowerCase] = React.useState(false);
    const [hasDigit, setHasDigit] = React.useState(false);
    const digitRegex = /\d/;
    const [hasSpecialChar, setHasSpecialChar] = React.useState(false);
    const specialCharsRegex = /[@$!%*?&]/;

    function passwordInput(event) {
        const {value, name} = event.currentTarget;
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
            name={name} 
            id={name} 
            type="password"
            placeholder={password} 
            pattern={pattern}
            key={index}
            onChange={passwordInput}
            value={currentPass}
            onFocus={() => setShowPolicy(true)}
            onBlur={() => setShowPolicy(false)}>
        </input>
        <PasswordPolicy 
            showPolicy={showPolicy} 
            currentPass={currentPass} 
            isGoodLen={isGoodLen}
            hasUpperCase={hasUpperCase}
            hasLowerCase={hasLowerCase}
            hasDigit={hasDigit}
            hasSpecialChar={hasSpecialChar}/>
        </>
    )
}

function setInputFields(inputProps) {
    return( 
        inputProps.map((input, index) => {
        if (Array.isArray(input)) {
            return (
                <div className="flex">
                    {input.map((groupInput, groupIndex) => {
                        let name = groupInput.toLowerCase().replace(" ", "");
                        return (
                            <input 
                                className="account-input-multiple" 
                                name={name} 
                                id={name} 
                                type="text" 
                                placeholder={groupInput} 
                                key={groupIndex + index + 1}>
                            </input>
                        )})}
                </div>
            )
        } else if (input === "Password") {
            return (
                setPasswordInput(input, index)
            )
        } else {
            const name = input.toLowerCase().replace(" ", "");
            return (
                <input 
                    className="account-input" 
                    name={name} 
                    id={name} 
                    type={input === "Confirm Password" ? "password" : "text"} 
                    placeholder={input} 
                    key={index}>
                </input>)}}
    ));
}

export default function AccountForm(props) {
    
    const inputs = setInputFields(props.inputs);
    
    return (
        <>
            <form className="account-form">
                <h1>Create an Account</h1>
                {inputs}
                <button>CREATE</button>
            </form>
        </>
    )

}