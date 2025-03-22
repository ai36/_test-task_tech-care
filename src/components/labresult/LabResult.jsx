import icon from "@img/download_FILL0_wght300_GRAD0_opsz24 (1).svg";
import styles from "./labResult.module.css";
import React, { useContext } from "react";
import { ApiDataContext } from "@src/ApiDataContext.jsx";

function LabResult() {
    const { dataRaw, loading, error } = useContext(ApiDataContext);

    if (loading) return <p>Загрузка...</p>;
    if (error) return <p>Ошибка: {error.message}</p>;

    const dataPatient = dataRaw.lab_results;
    return (
        <>
            <div className={styles.box}>
                <h2 className={styles.title}>Lab Results</h2>
                <ul className={styles.list}>
                    {dataPatient.map((item, key) => {
                        return (
                            <li className={styles.item} key={key}>
                                <a className={styles.link} href="#">
                                    <span className={styles.testname}>{item}</span>
                                    <img className={styles.icon} src={icon} />
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
}

export default LabResult;
