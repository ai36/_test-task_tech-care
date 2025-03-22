import PatientsList from "@components/patientslist/patientsList";
import DiagnosticPage from "@pages/diagnosticpage/DiagnosticPage";
import SideBar from "@components/sidebar/SideBar";
import styles from "./mainContent.module.css";

function MainContent() {
    return (
        <>
            <div className={styles.content}>
                <PatientsList />
                <DiagnosticPage />
                <SideBar />
            </div>
        </>
    );
}

export default MainContent;
