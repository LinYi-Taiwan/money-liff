import React, { useEffect } from "react";
import { selectProfile } from "@/store/slice/liff";
import { getProfile } from "@/store/slice/liff";
import { useDispatch, useSelector } from "react-redux";
import "./index.scss";

function Header(props) {
    const dispatch = useDispatch();
    const profile = useSelector(selectProfile);

    useEffect(() => {
        dispatch(getProfile());
    }, []);

    return (
        <div className="nav-wrapper">
            <img src="" alt="" className="logo" />
            <div className="profile">
                <img src={profile.user.picture} alt="" className="sticker" />
                <div className="user-name">{profile.user.name}</div>
            </div>
        </div>
    );
}

Header.propTypes = {};

export default Header;
