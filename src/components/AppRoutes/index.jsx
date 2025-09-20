import { BrowserRouter as Router, Routes, Route } from "react-router";

// page
import Home from "../../pages/Home";
import Profile from "../../pages/Profile";
import ModalDemo from "../../pages/ModalDemo"
import ScrollDemo from "../../pages/ScrollDemo"
import DefaultLayout from "../../layouts/DefaultLayout";

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route element={<DefaultLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/modal_demo" element={<ModalDemo />} />
                    <Route path="/scroll_demo" element={<ScrollDemo />} />
                </Route>

            </Routes>
        </Router>
    )
}
export default AppRoutes;