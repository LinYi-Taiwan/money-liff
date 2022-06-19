import React, { useEffect, useRef } from "react";
import EntryBox from "@/components/atom/EntryBox";
import Modal from "../../components/molecules/Modal";
import GroupForm from "../../components/molecules/Form";
import { useGroup } from "../../store/slice/group";

import GroupFormContent from "@/Form/Group";

import { A } from "hookrouter";

import styles from "./index.module.scss";

function AllGroup(props) {
    const [groupState, { createGroup, getGroup }] = useGroup();
    const { groupList } = groupState;
    const modalRef = useRef(null);

    useEffect(() => {
        getGroup();
    }, []);
    return (
        <div className={styles["group-container"]}>
            {groupList.map((group, index) => (
                <A key={index} href={"/group/" + group.uuid}>
                    <EntryBox>
                        <img
                            src={group.image_url}
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
                    submitAction={(data) => createGroup(data)}
                />
            </Modal>
        </div>
    );
}

export default AllGroup;
