import React from "react";
import Container from "../../components/atom/Container";

import "./index.scss";

import image from "@/images/logo.png";

function GroupOverview(props) {
    return (
        <div className="overview-wrapper">
            <Container>
                <div className="statistics">
                    <img src={image} alt="" className="banner" />
                </div>
                <div className="description">
                    <div className="title">總計共花費</div>
                    <div className="value">
                        30012 <span>元</span>
                    </div>
                    <div className="hint">
                        最後一次編輯 <span>2022/05/04</span>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default GroupOverview;
