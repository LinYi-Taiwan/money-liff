import React, { useState } from "react";
import "./index.scss";

function Nav({ navList, action }) {
    const [activeTab, setActiveTab] = useState("overview");
    const clickTab = (status) => {
        setActiveTab(status);
        action(status);
    };
    return (
        <div className="nav">
            {navList.map((item, index) => (
                <div
                    className={item.pageTitle === activeTab ? "active" : ""}
                    onClick={() => clickTab(item.pageTitle)}
                    key={item.pageTitle + index}
                >
                    {item.pageTitle}
                </div>
            ))}
        </div>
    );
}

export default Nav;
