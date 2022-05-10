import React from "react";
import "./index.scss";

function Circle({ isStart = false }) {
    const isStartStyle = isStart ? "start" : "";
    return <span className={`circle ${isStartStyle}`}></span>;
}

export default Circle;
