//import { dataRaw } from "@src/data-patient.js";
import birthIcon from "@img/BirthIcon.svg";
import genderFemaleIcon from "@img/FemaleIcon.svg";
import genderMaleIcon from "@img/MaleIcon.svg";
import phoneIcon from "@img/PhoneIcon.svg";
import insuranceIcon from "@img/InsuranceIcon.svg";
import styles from "./patientInfo.module.css";
import React, { useContext } from "react";
import { ApiDataContext } from "@src/ApiDataContext.jsx";

function PatientInfo() {
    const { dataRaw, loading, error } = useContext(ApiDataContext);

    if (loading) return <p>Загрузка...</p>;
    if (error) return <p>Ошибка: {error.message}</p>;
    const dataPatient = dataRaw;
    return (
        <section className={styles.box}>
            <div className={styles.top}>
                <img className={styles.photo} src={dataPatient.profile_picture} alt={dataPatient.name} />
                <h2 className={styles.name}>{dataPatient.name}</h2>
            </div>
            <ul className={styles.data}>
                <li className={styles.item}>
                    <img className={styles.icon} src={birthIcon} />
                    <span className={styles.legend}>date of birth</span>
                    <span className={styles.value}>{dataPatient.date_of_birth}</span>
                </li>
                <li className={styles.item}>
                    <img className={styles.icon} src={dataPatient.gender === "Female" ? genderFemaleIcon : genderMaleIcon} />
                    <span className={styles.legend}>gender</span>
                    <span className={styles.value}>
                        {dataPatient.gender}
                    </span>
                </li>
                <li className={styles.item}>
                    <img className={styles.icon} src={phoneIcon} />
                    <span className={styles.legend}>contact info</span>
                    <span className={styles.value}>{dataPatient.phone_number}</span>
                </li>
                <li className={styles.item}>
                    <img className={styles.icon} src={phoneIcon} />
                    <span className={styles.legend}>emergency contacts</span>
                    <span className={styles.value}>{dataPatient.emergency_contact}</span>
                </li>
                <li className={styles.item}>
                    <img className={styles.icon} src={insuranceIcon} />
                    <span className={styles.legend}>insurance provider</span>
                    <span className={styles.value}>{dataPatient.insurance_type}</span>
                </li>
            </ul>
            <button className={styles.button}>Show All Information</button>
        </section>
    );
}

export default PatientInfo;
