import React from "react";
import { Link } from "react-router";
export default function AccountInput(props) {

    /**
     * Maps props.inputs to a new array that will return input text boxes
     * props.inputs = array of objects
     * {
     *  name: name, 
     *  type: type, 
     *  placeholder: placeholder 
     * }
     */
    const inputBoxes = props.inputs.map((input) => 
        <input className="login-input" id={input.name} name={input.name} 
        type={input.type} placeholder={input.placeholder}/>
        );

    /**
     * Maps props.buttons to a new array that will return buttons with links
     * props.buttons = array of objects
     * {
     *  text: text
     *  link: link,
     * }
     */
    const buttons = props.buttons.map((button) =>
        <Link to={button.link}>
            <button className="login-input-options">{button.text}</button>
        </Link>
        );
    
    let pageClass;
    let pageTitle;
    switch (props.page) {
        case "signUp":
            pageClass = "login signUp";
            pageTitle = "Create a New Account";
            break;
        default:
            pageClass = "login";
            pageTitle = "Log in";
    }

    return(
        <div className={`${props.page}-background`}>
            
            <h1>{pageTitle}</h1>
            <div className="center-container">
                <form className={`center-container flex ${pageClass}`}>
                    
                    {pageClass == "login" ?
                        <Link to="/" className="text-link">
                            <p>LET'S<br/>MEET</p>
                        </Link> : null}
                    <div className="flex-column">
                        {inputBoxes}
                        <div className="flex">
                            {buttons}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}