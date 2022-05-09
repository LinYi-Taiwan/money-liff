import React from "react";
import Container from "../../atom/Container";

function container({ userInfo }) {
    return (
        <Container>
            <img src={userInfo.image} alt="" className="sticker" />
            <div className="right-side">
                <div className="name">{userInfo.name}</div>
                <div className="detail-container">
                    <div className="description">{userInfo.description}</div>
                    <div className="engage-date">{userInfo.engageDate}</div>
                </div>
            </div>
        </Container>
    );
}

export default container;
