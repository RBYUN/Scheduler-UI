import { Outlet } from "react-router";
import type { Button } from "../../types/index.ts";
import Header from "../../components/Header.tsx";
import { sections } from "./data/index.ts";

export default function Home() {

    const buttons: Button[] = [
        {
            text: "SIGN UP",
            link: "accounts/create",
            id: "signup",
        },
        {
            text: "LOGIN",
            link: "accounts/login",
            id: "login",
        },
    ];


    return(
        <>
            <Header buttons={buttons} sections={sections}/>
            <Outlet />
        </>
    );
}