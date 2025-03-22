import styles from "./diagnosticList.module.css";
import React, { useContext } from 'react';
import { ApiDataContext } from '@src/ApiDataContext.jsx';


function DiagnosticList() {
    const { dataRaw, loading, error } = useContext(ApiDataContext);
    
    if (loading) return <p>Загрузка...</p>;
    if (error) return <p>Ошибка: {error.message}</p>;
    
    const diagnosis = dataRaw.diagnostic_list;
    return (
        <>
            <div className={styles.box}>
                <h2 className={styles.title}>Diagnostic List</h2>
                <div className={styles.table}>
                    <div className={styles.tablehead}>
                        <div className={styles.name}>Problem/Diagnosis</div>
                        <div className={styles.description}>Description</div>
                        <div className={styles.status}>Status</div>
                    </div>
                    <div className={styles.tablecontent}>
                        {diagnosis.map((item, index) => {
                            return (
                                <div className={styles.tableitem} key={index}>
                                    <div className={styles.name}>{item.name}</div>
                                    <div className={styles.name}>{item.description}</div>
                                    <div className={styles.name}>{item.status}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default DiagnosticList;
