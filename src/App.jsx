import { Routes, Route } from "react-router";
import { ToastContainer } from "react-toastify";

import Home from "./pages/Home";
import Main from "./components/Main";
import SignUp from "./pages/SignUp";
import Verification from "./pages/Verification";
// import Login from "./pages/Login";

export default function App() {
    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
                theme="colored"
                transition="bounce"
            />
            <Routes>
                <Route element={<Home />}>
                    <Route index element={<Main />} />
                </Route>
                <Route path="accounts">
                    <Route path="create" element={<SignUp />} />
                    <Route path="verification" element={<Verification />} />
                </Route>

                {/* <Route path="login" element={<Login />} />
                <Route path="accounts">
                    <Route path="create" element={<SignUp />} />
                </Route> */}
            </Routes>
        </>
    )
}
