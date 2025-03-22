import PatientInfo from "@components/patientinfo/PatientInfo";
import LabResult from "@components/labresult/LabResult";
import styles from "./sideBar.module.css"

function SideBar() {
    return (
        <aside className={styles.sidebar}>
            <PatientInfo />
            <LabResult />
        </aside>
    );
}

export default SideBar;
