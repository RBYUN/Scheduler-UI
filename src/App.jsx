import { Routes, Route } from "react-router";

import Home from "./pages/Home";
import Main from "./components/Main";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

export default function App() {
    return (
        <>
            <Routes>
                <Route element={<Home />}>
                    <Route index element={<Main />} />
                </Route>
                <Route path="login" element={<Login />} />
                <Route path="accounts">
                    <Route path="create" element={<SignUp />} />
                </Route>
            </Routes>
        </>
    )
}
