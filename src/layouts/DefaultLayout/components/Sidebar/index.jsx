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
]
function Sidebar() {
    return (
        <div className={styles.wrapper}>
            <ul className={styles.lists}>
                {dirItems.map((item, index) => (
                    <li key={index}>
                        <NavLink
                        className={({isActive}) => (
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