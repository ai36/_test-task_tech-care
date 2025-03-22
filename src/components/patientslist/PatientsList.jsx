import { patiensList } from "@src/data.js";
import Patient from "@components/patient/Patient";
import search from "@assets/img/search_FILL0_wght300_GRAD0_opsz24.svg";
import styles from "./patientsList.module.css";

function PatientsList() {
    return (
        <aside className={styles["patients-list"]}>
            <div className={styles["patiens-list__header"]}>
                <h2 className={styles.title}>Patients</h2>
                <img className={styles.search} src={search} alt="Search" />
            </div>
            <ul className={styles["patiens-list__content"]}>
                {patiensList.map( (item) => {
                    return (
                    <li key={item.id}>
                        <Patient image={item.image} title={item.title} sex={item.sex} age={item.age} />
                    </li>
                    );
                })}
            </ul>
        </aside>
    );
}

export default PatientsList;
