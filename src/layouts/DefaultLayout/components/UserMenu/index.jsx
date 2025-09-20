import styles from "./UserMenu.module.scss";
import avatar from "../../../../assets/images/avatar.jpg"
function UsersMenu() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.avatar}>
                <img src={avatar} alt="" />
            </div>
        </div>
    )   
}
export default UsersMenu;