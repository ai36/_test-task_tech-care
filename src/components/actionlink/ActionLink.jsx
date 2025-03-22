import styles from "./actionLink.module.css";

function ActionLink(props) {
    return (
        <>
            <a className={styles.link} href={props.link}>
                <img className={styles.image} src={props.image} alt={props.alt} />
                <span className={styles.text}>{props.text}</span>
            </a>
        </>
    );
}

export default ActionLink;
