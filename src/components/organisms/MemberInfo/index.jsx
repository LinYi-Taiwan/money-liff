import React from "react";
import Wrapper from "../../atom/Wrapper";
import Circle from "../../atom/Circle";

function container({ userInfo }) {
    return (
        <Wrapper>
            <img src={userInfo.image} alt="" className="sticker" />
            <div className="right-side">
                <div className="name">{userInfo.name}</div>
                <div className="detail-container">
                    <div className="description">{userInfo.description}</div>
                    <div className="engage-date">{userInfo.engageDate}</div>
                </div>
            </div>
        </Wrapper>
    );
}

export default container;
