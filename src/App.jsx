import { Routes, Route } from "react-router";

import Home from "./pages/Home";
import Main from "./components/Main";
import Login from "./pages/Login";

export default function App() {
    return (
        <>
            <Routes>
                <Route element={<Home />}>
                    <Route index element={<Main />} />
                </Route>
                <Route path="/login" element={<Login />} />
            </Routes>
        </>
    )
}
