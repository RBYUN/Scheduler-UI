import type { Button, Section } from "../types/index.ts";
import UserBox from "./UserBox.tsx";

type HeaderProps = {
    buttons?: Button[];
    sections?: Section[];
}

export default function Header({ buttons, sections }: HeaderProps ) {

    function routePage() {

    }
    
    const sectionLinks = sections?.map(section => {
            return <h2>{section.text}</h2>
    });
    return(
        <>
            <header>
                <h1>align:TIME</h1>
                <div className="user-box">
                    {sectionLinks}
                </div>
                { buttons ? <UserBox buttons={buttons}/> : null }
            </header>
        </>
    );
}