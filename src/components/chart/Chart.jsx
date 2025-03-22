// import { dataRaw } from "@src/data-patient.js";
import arrowup from "@assets/img/ArrowUp.svg";
import arrowdown from "@assets/img/ArrowDown.svg";
import summaryIcon from "@assets/img/expand_more_FILL0_wght300_GRAD0_opsz24.svg";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement } from "chart.js";
import styles from "./chart.module.css";
import React, { useContext } from 'react';
import { ApiDataContext } from '@src/ApiDataContext.jsx';


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

const Chart = () => {
    const { dataRaw, loading, error } = useContext(ApiDataContext);

    if (loading) return <p>Загрузка...</p>;
    if (error) return <p>Ошибка: {error.message}</p>;
    
    const chartLabels = dataRaw.diagnosis_history.map( (item) => { return `${item.month.slice(0, 3)}, ${item.year}`} ).reverse();
    const chartSystolicData = dataRaw.diagnosis_history.map( (item) => { return item.blood_pressure.systolic.value } ).reverse();
    const chartDiastolicData = dataRaw.diagnosis_history.map( (item) => { return item.blood_pressure.diastolic.value } ).reverse();
    
    function arrayAverage(arr) {
        let sum = arr.reduce((acc, curr) => acc + curr, 0);
        return (sum/arr.length).toFixed(2);
    }
    
    function arrowAverage(arr) {
        return (arr.at(-1) >= arrayAverage(arr) ? [arrowup, "Higher than Average"] : [arrowdown, "Lower than Average"]);
    }

    const data = {
        labels: chartLabels,
        datasets: [
            {
                data: chartSystolicData,
                borderColor: "#E66FD2",
                backgroundColor: "#E66FD2",
                pointRadius: 7,
                pointBorderColor: "#F4F0FE",
                pointBorderWidth: 1,
                tension: .5,
            },
            {
                data: chartDiastolicData,
                borderColor: "#8C6FE6",
                backgroundColor: "#8C6FE6",
                pointRadius: 7,
                pointBorderColor: "#F4F0FE",
                pointBorderWidth: 1,
                tension: 0.5,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: null,
            },
        },
        scales: {
            y: {
                suggestedMin: 60,
                suggestedMax: 180,
            },
            x: {
                grid: {
                    drawBorder: false,
                    display: false,
                },
            },
        },
    };

    return (
        <>
            <div className={styles.box}>
                <div className={styles.top}>
                    <h3 className={styles.title}>Blood pressure</h3>
                    <details>
                        <summary>
                            <span>Last 6 mounts</span>
                            <img src={summaryIcon} alt="Select" />
                        </summary>
                    </details>
                </div>
                <div className={styles.legend}>
                    <div className={styles.head}>
                        <div className={styles.color}></div>
                        <h4 className={styles.title}>Systolic</h4>
                    </div>
                    <div className={styles.value}>{chartSystolicData.at(-1)}</div>
                    <div className={styles.desc}>
                        <img className={styles.icon} src={arrowAverage(chartSystolicData)[0]} />
                        <span className={styles.text}>{arrowAverage(chartSystolicData)[1]}</span>
                    </div>
                </div>
                <div className={styles.legend}>
                    <div className={styles.head}>
                        <div className={styles.color}></div>
                        <h4 className={styles.title}>Diastolic</h4>
                    </div>
                    <div className={styles.value}>{chartDiastolicData.at(-1)}</div>
                    <div className={styles.desc}>
                        <img className={styles.icon} src={arrowAverage(chartDiastolicData)[0]} />
                        <span className={styles.text}>{arrowAverage(chartDiastolicData)[1]}</span>
                    </div>
                </div>
                <div className={styles.canvas}>
                    <Line options={options} data={data} />
                </div>
            </div>
        </>
    );
};

export default Chart;
