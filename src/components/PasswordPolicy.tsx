import type { JSX } from "react";

type PasswordPolicyProp = {
    isGoodLen: boolean;
    hasUpperCase: boolean;
    hasLowerCase: boolean;
    hasDigit: boolean;
    hasSpecialChar: boolean;
    showPolicy: boolean;
};

function classPass(condition: boolean): string {
    if (condition) {
        return "password-policy-pass";
    }
    return "";
}

export default function PasswordPolicy({ isGoodLen, hasUpperCase, hasLowerCase, hasDigit, hasSpecialChar, showPolicy }: PasswordPolicyProp): JSX.Element | null {
    
    return (
        showPolicy ? 
            <div className="password-policy-box">
                <ul>
                    <li className={classPass(isGoodLen)}>More than 8 Characters</li>
                    <li className={classPass(hasUpperCase && hasLowerCase)}>Uppercase and Lowercase Letters</li>
                    <li className={classPass(hasDigit)}>One Number Required</li>
                    <li className={classPass(hasSpecialChar)}>Needs One of @, $, !, %, *, ?, &</li>
                </ul>
            </div> 
            : null
    );
}