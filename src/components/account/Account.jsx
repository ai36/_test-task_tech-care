import photo from "@img/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png";
import settings from "@img/settings_FILL0_wght300_GRAD0_opsz24.svg";
import morev from "@img/more_vert_FILL0_wght300_GRAD0_opsz24.svg";
import styles from "@components/account/account.module.css";

const title = "Dr.Jose Simmons";
const desc = "General Practioner";

function Account() {
    return (
        <>
            <div className={styles.box}>
                <img className={styles.image} src={photo} alt={title} />
                <div className={styles.text}>
                    <span className={styles.title}>{title}</span>
                    <span className={styles.desc}>{desc}</span>
                </div>
                <hr className={styles.separator} />
                <img className={styles.settings} src={settings} alt="Settings" />
                <img className={styles.morev} src={morev} alt="More" />
            </div>
        </>
    );
}

export default Account;
