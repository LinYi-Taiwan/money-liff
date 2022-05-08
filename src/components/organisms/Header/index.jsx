import React, { useEffect } from "react";
import { selectProfile } from "@/store/slice/liff";
import { getProfile } from "@/store/slice/liff";
import { useDispatch, useSelector } from "react-redux";
import logo from "@/images/logo.png";

import "./index.scss";

function Header(props) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProfile());
    }, []);

    const profile = useSelector(selectProfile);

    return (
        <div className="nav-wrapper">
            <img src={logo} alt="" className="logo" />
            <div className="profile">
                <div className="user-name">{profile.user.name}</div>
                <img src={profile.user.picture} alt="" className="sticker" />
            </div>
        </div>
    );
}

Header.propTypes = {};

export default Header;
