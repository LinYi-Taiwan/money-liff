import React, { useState } from "react";

import Nav from "@/components/organisms/Nav";
import GroupOverview from "../GroupOverview";
import GroupUser from "../GroupUser";

import image from "@/images/logo.png";

import "./index.scss";

const groupNavList = [{ pageTitle: "overview" }, { pageTitle: "member" }];
const userInfo = [
    {
        name: "linyi",
        image: image,
        engageDate: "2022/05/04",
        description: "hello! im linyi",
    },
    {
        name: "test bot",
        image: image,
        engageDate: "2022/05/05",
        description: "hello! im bot",
    },
];

function Group(props) {
    const [groupPage, setGroupPage] = useState("overview");

    return (
        <div>
            <Nav navList={groupNavList} action={setGroupPage} />
            {groupPage === "overview" ? (
                <GroupOverview />
            ) : (
                <GroupUser userInfo={userInfo} />
            )}
        </div>
    );
}

Group.propTypes = {};

export default Group;
