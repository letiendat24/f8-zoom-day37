import { NavLink } from "react-router";
import styles from "./AppLogo.module.scss";

// logo img
import logoImg from "../../../../assets/images/f8-logo.png";
function AppLogo() {
    return (
        <h1 className={styles.logo}>
            <NavLink to="/">
                <img src={logoImg} alt="logo" />
            </NavLink>
            <NavLink to="/" className={styles.textLogo}>
                Học Lập Trình Để Đi Làm
            </NavLink>
        </h1>
    )
}

export default AppLogo;