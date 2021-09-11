import React from "react"
import styles from "./Dialogs.module.css"

const Dialogs = (props) => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialog_users}>
                <div className={styles.dialog_user + ' ' + styles.active}>
                    <p>Ilya</p>
                </div>
                <div className={styles.dialog_user}>
                    <NavLink>Masha</NavLink>
                </div>
                <div className={styles.dialog_user}>
                    <NavLink>Arina</NavLink>
                </div>
                <div className={styles.dialog_user}>
                    <NavLink>Artyom</NavLink>
                </div>
                <div className={styles.dialog_user}>
                    <NavLink>Keks</NavLink>
                </div>
                <div className={styles.dialog_user}>
                    <NavLink>Dima</NavLink>
                </div>
            </div>
            <div className={styles.dialog_messages}>
                <div className={styles.dialog_message}>
                    <p>Hello world</p>
                </div>
                <div className={styles.dialog_message}>
                    <p>Kek</p>
                </div>
                <div className={styles.dialog_message}>
                    <p>Lol</p>
                </div>
            </div>
        </div>
    )
}

export default Dialogs