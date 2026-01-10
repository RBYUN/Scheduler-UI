import UserBox from "./UserBox.tsx";
import type { UserBoxProps } from "../types/index.ts"

export default function Header({ buttons, className }: UserBoxProps ) {

    return(
        <>
            <header>
                <div></div>
                <h1><em>TimeBlock</em></h1>
                { buttons ? <UserBox buttons={buttons} className={className}/> : null }
            </header>
        </>
    );
}