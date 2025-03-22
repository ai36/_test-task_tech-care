import Header from "@components/header/Header";
import MainContent from "@components/maincontent/MainContent";
import styles from "./applayout.module.css";

function AppLayout() {
    return (
        <>
            <div className={styles.content}>
                <Header />
                <MainContent />
            </div>
        </>
    );
}

export default AppLayout;
