import DiagnosticHistory from "@components/diagnosticHistory/DiagnosticHistory";
import DiagnosticList from "@components/diagnosticList/DiagnosticList";
import styles from "./diagnosticPage.module.css";

function DiagnosticPage() {
    return (
        <>
            <main className={styles.content}>
                <DiagnosticHistory />
                <DiagnosticList />
            </main>
        </>
    );
}

export default DiagnosticPage;
