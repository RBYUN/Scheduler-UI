import React from "react";

import NavBar from "./NavBar";
import UserBox from "./UserBox";
export default function Header() {

    return (
        <header className="flex">
            <NavBar />
            <h1>LET'S MEET</h1>
            <UserBox />
        </header>
    );
}