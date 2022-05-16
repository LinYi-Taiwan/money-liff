import React from "react";
import Wrapper from "../../components/atom/Wrapper";

import "./index.scss";

import image from "@/images/logo.png";

function GroupOverview(props) {
    return (
        <div className="overview-wrapper">
            <Wrapper>
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
            </Wrapper>
        </div>
    );
}

export default GroupOverview;
