import { useEffect, useState } from "react";
import "./index.scss";
import logo from "@/images/logo.png";

function Liff() {
    return (
        <div className="group-container">
            <div className="group">
                <img src={logo} alt="" className="group-sticker" />
                <p className="group-name">
                    群組群組群組群組群組群組群組群組群組
                </p>
            </div>
            <div className="group">
                <img src={logo} alt="" className="group-sticker" />
                <p className="group-name">
                    群組群組群組群組群組群組群組群組群組
                </p>
            </div>
            <div className="group">
                <img src={logo} alt="" className="group-sticker" />
                <p className="group-name">
                    群組群組群組群組群組群組群組群組群組
                </p>
            </div>
        </div>
    );
}

export default Liff;
