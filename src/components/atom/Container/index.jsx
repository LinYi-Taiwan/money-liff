import React from "react";
import "./index.scss";

function Container(props) {
    return <div className="wrapper">{props.children}</div>;
}

Container.propTypes = {};

export default Container;
