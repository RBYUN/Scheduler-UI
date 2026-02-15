import { Link } from "react-router-dom";
import type { Button, UserBoxProps } from "../types/index.ts";
import type { JSX } from "react";

export default function UserBox({ buttons }: UserBoxProps) {
    let buttonsList: JSX.Element[] | undefined;
    
    if (buttons) {
        buttonsList = buttons.map((button: Button ) => 
        <Link to={button.link}>
            <button onClick={button.action ? button.action : undefined} className="account-buttons" key={button.id} id={button.id}>
                {button.text}
            </button>
        </Link>
        );
    }
    

    return(
        <div className="user-box">
            {buttonsList}
        </div>
    );
}