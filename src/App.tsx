import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Home from "./pages/Home.tsx";
import Main from "./components/Main.tsx";
import SignUp from "./pages/accounts/SignUp.tsx";
import Verification from "./pages/accounts/Verification.tsx";
import Login from "./pages/accounts/Login.tsx";

import Error from "./pages/Error.tsx";
// import Login from "./pages/Login";

export default function App() {
    return (
        <>
            <ToastContainer
                position="bottom-right"
                autoClose={3500}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
                theme="colored"
            />
            <Routes>
                <Route element={<Home />}>
                    <Route index element={<Main />} />
                </Route>
                <Route path="accounts">
                    <Route path="create" element={<SignUp />} />
                    <Route path="verification" element={<Verification />} />
                    <Route path="login" element={<Login />} />
                </Route>
                <Route path="error">
                    <Route index element={<Error />} />
                </Route>

                {/* <Route path="login" element={<Login />} />
                <Route path="accounts">
                    <Route path="create" element={<SignUp />} />
                </Route> */}
            </Routes>
        </>
    )
}
