import logo from "@assets/img/TestLogo.svg";
import styles from "./logo.module.css";

function Logo() {
    return (
        <>
            <a className={styles.link} href="/">
                <img className={styles.image} src={logo} alt="Logotype Tech Care" />
            </a>
        </>
    );
}

export default Logo;
