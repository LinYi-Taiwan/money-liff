import React, { useState } from "react";

import Nav from "@/components/organisms/Nav";
import GroupOverview from "../GroupOverview";
import GroupUser from "../GroupUser";
import Schedule from "../Schedule";

import image from "@/images/logo.png";

import "./index.scss";
import { useMemo } from "react";

const groupNavList = [
    { pageTitle: "overview" },
    { pageTitle: "schedule" },
    { pageTitle: "member" },
];
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
    const renderPage = useMemo(() => {
        switch (groupPage) {
            case "overview":
                return <GroupOverview />;
            case "member":
                return <GroupUser userInfo={userInfo} />;
            case "schedule":
                return <Schedule />;
            default:
                return null;
        }
    }, [groupPage]);

    return (
        <div>
            <Nav navList={groupNavList} action={setGroupPage} />
            {renderPage}
        </div>
    );
}

Group.propTypes = {};

export default Group;
