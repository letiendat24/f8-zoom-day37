import { NavLink } from "react-router";
import styles from "./Sidebar.module.scss";

const dirItems = [
    {
        to: "/",
        title: "Trang chủ",
        icon: <i className="fa-solid fa-house"></i>
    },
    {
        to: "/modal_demo",
        title: "Modal",
        icon: <i className="fa-solid fa-arrow-up-right-from-square"></i>
    },
    {
        to: "/profile",
        title: "Profile",
        icon: <i className="fa-solid fa-user"></i>
    },
    {
        to: "/scroll_demo",
        title: "Scroll",
        icon: <i className="fa-solid fa-arrow-up"></i>
    },
    {
        to: "/performance-demo",
        title: "Performance",
        icon: <i className="fa-solid fa-chart-simple"></i>
    },
    {
        to: "/focus-demo",
        title: "Focus",
        icon: <i className="fa-solid fa-arrows-to-eye"></i>
    },
    {
        to: "/hoc-demo",
        title: "HOCDemo",
        icon: <i className="fa-solid fa-gift"></i>
    },
    {
        to: "/render-props-demo",
        title: "Render Props",
        icon: <i className="fa-solid fa-genderless"></i>
    },
    {
        to: "/custom-hooks-demo",
        title: "Hooks",
        icon: <i className="fa-brands fa-intercom"></i>
    },
]
function Sidebar() {
    return (
        <div className={styles.wrapper}>
            <ul className={styles.lists}>
                {dirItems.map((item, index) => (
                    <li key={index}>
                        <NavLink
                            className={({ isActive }) => (
                                isActive ? `${styles.itemBtn} ${styles.active}` : `${styles.itemBtn}`
                            )}
                            to={item.to}

                        >
                            <div className={styles.iconBtn}>{item.icon}</div>
                            <span>{item.title}</span>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Sidebar;