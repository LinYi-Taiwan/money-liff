import React from "react";
import EntryBox from "@/components/organisms/EntryBox";

import logo from "@/images/logo.png";

import { A } from "hookrouter";

import "./index.scss";

const mapToGroup = [
    { id: 1, name: "group1", image: logo },
    { id: 2, name: "group2", image: logo },
    { id: 3, name: "group3", image: logo },
];

function AllGroup(props) {
    return (
        <div className="group-container">
            {mapToGroup.map((group, index) => (
                <A key={index} href={"/group/" + group.id}>
                    <EntryBox info={group} />
                </A>
            ))}
        </div>
    );
}

export default AllGroup;
