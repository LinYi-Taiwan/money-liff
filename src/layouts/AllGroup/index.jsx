import React, { useRef } from "react";
import EntryBox from "@/components/atom/EntryBox";
import Modal from "../../components/molecules/Modal";
import GroupForm from "../../components/molecules/Form";

import { selectGroup } from "@/store/slice/group";
import { useSelector, useDispatch } from "react-redux";
import { createGroup } from "@/store/slice/group";

import GroupFormContent from "@/Form/Group";

import logo from "@/images/logo.png";

import { A } from "hookrouter";

import styles from "./index.module.scss";

function AllGroup(props) {
    const modalRef = useRef(null);
    const dispatch = useDispatch();

    const { groupList } = useSelector(selectGroup);

    return (
        <div className={styles["group-container"]}>
            {groupList.map((group, index) => (
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
                    submitAction={(data) => dispatch(createGroup(data))}
                />
            </Modal>
        </div>
    );
}

export default AllGroup;
