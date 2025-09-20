import styles from "./Notification.module.scss";
function Notification() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.icon}>
                <i className="fa-solid fa-bell"></i>
            </div>
        </div>
    )
}
export default Notification;