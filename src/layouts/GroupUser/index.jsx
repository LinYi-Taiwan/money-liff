import React from "react";
import UserInfo from "@/components/organisms/MemberInfo";
import "./index.scss";

function GroupUser({ userInfo }) {
    console.log("wow", userInfo);
    return (
        <div className="user-container">
            {userInfo.map((user, index) => (
                <UserInfo key={index} userInfo={user} />
            ))}
        </div>
    );
}

export default GroupUser;
