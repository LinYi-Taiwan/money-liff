import React from "react";
import styles from "./index.module.scss";

function Wrapper(props) {
    return <div className={styles.wrapper}>{props.children}</div>;
}

Wrapper.propTypes = {};

export default Wrapper;
