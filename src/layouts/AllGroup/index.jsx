import React from "react";
import EntryBox from "@/components/atom/EntryBox";

import logo from "@/images/logo.png";

import { A } from "hookrouter";

import styles from "./index.module.scss";

const mapToGroup = [
    { id: 1, name: "group1", image: logo },
    { id: 2, name: "group2", image: logo },
    { id: 3, name: "group3", image: logo },
];

function AllGroup(props) {
    return (
        <div className={styles["group-container"]}>
            {mapToGroup.map((group, index) => (
                <A key={index} href={"/group/" + group.id}>
                    <EntryBox>
                        <img
                            src={group.image}
                            alt=""
                            className={styles["group-sticker"]}
                        />
                        <p className={styles["group-name"]}>{group.name}</p>
                    </EntryBox>
                </A>
            ))}
            <EntryBox>
                <div className={styles["add-container"]}>＋</div>
            </EntryBox>
        </div>
    );
}

export default AllGroup;
