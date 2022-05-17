import React from "react";
import styles from "./index.module.scss";

function Form({ GroupFormContent, modalController }) {
    const { open, close } = modalController.current;

    console.log("modal controller", modalController);
    const { title, formContent } = GroupFormContent;
    return (
        <div className={styles["form-container"]}>
            <div className={styles["form-header"]}>
                <div className={styles.title}>{title}</div>
                <div onClick={() => close()}>關閉</div>
            </div>
            {formContent.map((form, index) => (
                <div key={form.label + index} className="form">
                    <label htmlFor="name"> {form.label}</label>
                    <input type="text" />
                </div>
            ))}
        </div>
    );
}

Form.propTypes = {};

export default Form;
