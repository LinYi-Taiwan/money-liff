import React, { useRef, useState } from "react";
import EntryBox from "@/components/atom/EntryBox";
import Modal from "../../components/molecules/Modal";
import GroupForm from "../../components/molecules/Form";

import GroupFormContent from "@/Form/Group";

import logo from "@/images/logo.png";

import { A } from "hookrouter";

import styles from "./index.module.scss";

const mapToGroup = [
    { id: 1, name: "group1", image: logo },
    { id: 2, name: "group2", image: logo },
    { id: 3, name: "group3", image: logo },
];

function AllGroup(props) {
    const [isModalOpen, setModalOpen] = useState(false);

    const modalRef = useRef(null);

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
                <div
                    onClick={() => modalRef.current.open()}
                    className={styles["add-container"]}
                >
                    ＋
                </div>
            </EntryBox>
            <Modal ref={modalRef}>
                <GroupForm
                    GroupFormContent={GroupFormContent}
                    modalController={modalRef}
                />
            </Modal>
        </div>
    );
}

export default AllGroup;
