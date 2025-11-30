import React from "react";

export default function PasswordPolicy(props) {

    const isGoodLen = props.isGoodLen ? "password-policy-pass" : "";
    const hasUpperAndLower = props.hasUpperCase && props.hasLowerCase ? "password-policy-pass" : "";
    const hasDigit = props.hasDigit ? "password-policy-pass" : "";
    const hasSpecialChar = props.hasSpecialChar ? "password-policy-pass" : "";
    
    return (
        props.showPolicy ? 
            <div className="password-policy-box">
                <ul>
                    <li className={isGoodLen}>More than 8 Characters</li>
                    <li className={hasUpperAndLower}>Uppercase and Lowercase Letters</li>
                    <li className={hasDigit}>One Number Required</li>
                    <li className={hasSpecialChar}>Needs One of @, $, !, %, *, ?, &</li>
                </ul>
            </div> 
            : null
    )
}