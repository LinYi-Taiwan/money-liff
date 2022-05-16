import React from "react";
import styles from "./index.module.scss";

function Circle({ isStart = false }) {
    return (
        <span
            className={`${styles.circle} ${isStart ? styles.start : ""}`}
        ></span>
    );
}

export default Circle;
