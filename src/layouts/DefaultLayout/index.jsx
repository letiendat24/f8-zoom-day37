import { Outlet } from "react-router";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar"

import styles from "./DefaultLayout.module.scss";
function DefaultLayout() {
    return (
        <>
            <Header />
            <div className={styles.container}>
                <Sidebar />
                <div className={styles.content}>
                    <Outlet />
                </div>
            </div>

        </>
    )
}
export default DefaultLayout;