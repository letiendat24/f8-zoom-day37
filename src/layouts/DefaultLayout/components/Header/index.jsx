import AppLogo from "../AppLogo";
import SearchForm from "../SearchForm";
import Action from "../Action";
import styles from "./Header.module.scss";
function Header() {
    return (
        <div className={styles.header}>
            <AppLogo />
            <SearchForm />
            <Action />
        </div>


    )
}
export default Header;