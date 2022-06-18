import React, { useEffect } from "react";
import { selectProfile } from "@/store/slice/liff";
import { getProfile, sendFlexMsg } from "@/store/slice/liff";
import { useDispatch, useSelector } from "react-redux";
import { useProfile } from "../../../store/slice/liff";

import { A } from "hookrouter";

import "./index.scss";

function Header(props) {
    const [profileState, { getProfile }] = useProfile();

    useEffect(() => {
        getProfile();
    }, []);

    const profile = useSelector(selectProfile);

    return (
        <div className="nav-wrapper">
            <div className="path-container">
                {/* <img src={logo} alt="" className="logo" /> */}
                <A href="/group">
                    <div className="director">首頁</div>
                </A>
                {/* <div
                    className="director"
                    onClick={() => dispatch(sendFlexMsg())}
                >
                    sending msg
                </div> */}
            </div>

            <div className="profile">
                <div className="user-name">{profileState.user.name}</div>
                <img
                    src={profileState.user.picture}
                    alt=""
                    className="sticker"
                />
            </div>
        </div>
    );
}

Header.propTypes = {};

export default Header;
