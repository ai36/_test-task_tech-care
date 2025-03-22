import moreh from "@img/more_horiz_FILL0_wght300_GRAD0_opsz24.svg";
import styles from "./patient.module.css";

function Patient(props) {
    return (
        <>
            <div className={styles.box} key={props.id}>
                <img className={styles.image} src={props.image} alt={props.title} />
                <div className={styles.text}>
                    <span className={styles.title}>{props.title}</span>
                    <span className={styles.desc}>
                        {props.sex}, {props.age}
                    </span>
                </div>
                <hr className={styles.separator} />
                <img className={styles.moreh} src={moreh} alt="More" />
            </div>
        </>
    );
}

export default Patient;
