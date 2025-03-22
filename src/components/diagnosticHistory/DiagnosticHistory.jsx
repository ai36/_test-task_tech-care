import Chart from "@components/chart/Chart";
import respiratoryIcon from "@img/respiratory rate.svg";
import temperatureIcon from "@img/temperature.svg";
import heartIcon from "@img/HeartBPM.svg";
// import { dataRaw } from "@src/data-patient.js";
import styles from "./diagnosticHistory.module.css";
import React, { useContext } from "react";
import { ApiDataContext } from "@src/ApiDataContext.jsx";


function DiagnosticHistory() {
    const { dataRaw, loading, error } = useContext(ApiDataContext);
    
    if (loading) return <p>Загрузка...</p>;
    if (error) return <p>Ошибка: {error.message}</p>;
    
    const respiratory = dataRaw.diagnosis_history[0].respiratory_rate;
    const temperature = dataRaw.diagnosis_history[0].temperature;
    const heart = dataRaw.diagnosis_history[0].heart_rate;
    return (
        <>
            <div className={styles.box}>
                <h2 className={styles.title}>Diagnosis History</h2>
                <div className={styles.content}>
                    <div className={styles.chart}>
                        <Chart />
                    </div>
                    <div className={styles.respiratory}>
                        <img className={styles.pic} src={respiratoryIcon} />
                        <h3 className={styles.subtitle}>respiratory rate</h3>
                        <span className={styles.value}>{respiratory.value} bpm</span>
                        <span className={styles.levels}>{respiratory.levels}</span>
                    </div>
                    <div className={styles.temperature}>
                        <img className={styles.pic} src={temperatureIcon} />
                        <h3 className={styles.subtitle}>temperature</h3>
                        <span className={styles.value}>{temperature.value} bpm</span>
                        <span className={styles.levels}>{temperature.levels}</span>
                    </div>
                    <div className={styles.heart}>
                        <img className={styles.pic} src={heartIcon} />
                        <h3 className={styles.subtitle}>heart rate</h3>
                        <span className={styles.value}>{heart.value} bpm</span>
                        <span className={styles.levels}>{heart.levels}</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DiagnosticHistory;
