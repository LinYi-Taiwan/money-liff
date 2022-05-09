import React, { useEffect } from "react";
import { selectProfile } from "@/store/slice/liff";
import { getProfile } from "@/store/slice/liff";
import { useDispatch, useSelector } from "react-redux";
import logo from "@/images/logo.png";

import { A } from "hookrouter";
import "./index.scss";

function Header(props) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProfile());
    }, []);

    const profile = useSelector(selectProfile);

    return (
        <div className="nav-wrapper">
            <div className="path-container">
                {/* <img src={logo} alt="" className="logo" /> */}
                <A href="/group">
                    <div className="director">首頁</div>
                </A>
            </div>

            <div className="profile">
                <div className="user-name">{profile.user.name}</div>
                <img src={profile.user.picture} alt="" className="sticker" />
            </div>
        </div>
    );
}

Header.propTypes = {};

export default Header;
