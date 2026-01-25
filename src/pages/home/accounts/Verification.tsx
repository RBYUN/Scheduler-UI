import Header from "../../../components/Header.tsx";
export default function Verification() {
    return (
        <>
            <Header/>
            <div className="main-body">
                <div className="main-body-glass">
                    <h1>EMAIL VERIFICATION SENT</h1>
                    <h2>You will receive a link to complete 
                        the verification process.<br />
                        Please verify within the next 
                        <b> 30 minutes</b>.<br />
                        You may need to check your <b>SPAM</b> folder.</h2>
                </div>
            </div>
        </>
    )
}