import { HashRouter as Router, Routes, Route } from "react-router";

// page
import Home from "../../pages/Home";
import Profile from "../../pages/Profile";
import ModalDemo from "../../pages/ModalDemo"
import ScrollDemo from "../../pages/ScrollDemo"
import DefaultLayout from "../../layouts/DefaultLayout";
import PerformanceDemo from "../../pages/PerformanceDemo";
import FocusDemo from "../../pages/FocusDemo";
import HOCDemo from "../../pages/HOCDemo";
import RenderPropsDemo from "../../pages/RenderPropsDemo";
import CustomHooksDemo from "../../pages/CustomHooksDemo";

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route element={<DefaultLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/modal_demo" element={<ModalDemo />} />
                    <Route path="/scroll_demo" element={<ScrollDemo />} />
                    <Route path="/performance-demo" element={<PerformanceDemo />}/>
                    <Route path="/focus-demo" element={<FocusDemo />}/>
                    <Route path="/hoc-demo" element={<HOCDemo />}/>
                    <Route path="/render-props-demo" element={<RenderPropsDemo />}/>
                    <Route path="/custom-hooks-demo" element={<CustomHooksDemo />}/>

                </Route>

            </Routes>
        </Router>
    )
}
export default AppRoutes;