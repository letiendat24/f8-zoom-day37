import MyCourses from "../MyCourses";
import UsersMenu from "../UserMenu";
import Notification from "../Notification";

import styles from "./Action.module.scss"
function Action() {
    return (
        <div className= {styles.action}>
            <MyCourses />
            <Notification />
            <UsersMenu />
        </div>
    )
}

export default Action;