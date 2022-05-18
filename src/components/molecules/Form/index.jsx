import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";

import Input from "../../atom/Input";
import Select from "../../atom/Select";
import Count from "../../atom/Count";
import UploadImage from "../../atom/UploadImage";

import { useForm, Controller } from "react-hook-form";

function Form({ GroupFormContent, modalController, submitAction }) {
    const [isValid, setIsValid] = useState(false);
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        trigger,
        formState: { errors },
    } = useForm();

    useEffect(() => {
        watch(() => {
            trigger().then((validation) => {
                setIsValid(validation);
            });
        });
    }, [isValid]);

    const onSubmit = (data) => {
        submitAction(data);
        close();
    };

    const { open, close } = modalController.current;

    const { title, formContent } = GroupFormContent;

    const formRenderPicker = (type, formContent) => {
        switch (type) {
            case "upload":
                return (
                    <UploadImage
                        register={register}
                        formContent={formContent}
                    ></UploadImage>
                );
            case "input":
                return (
                    <Input
                        register={register}
                        formContent={formContent}
                    ></Input>
                );
            case "select":
                return (
                    <Select
                        register={register}
                        formContent={formContent}
                    ></Select>
                );
            case "count":
                return (
                    <Count
                        setValue={setValue}
                        register={register}
                        formContent={formContent}
                    ></Count>
                );
            default:
                return "No such form type.";
        }
    };
    return (
        <div className={styles["form-container"]}>
            <div className={styles["form-header"]}>
                <div className={styles.title}>{title}</div>
                <div onClick={() => close()}>關閉</div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                {formContent.map((form, index) => (
                    <div
                        key={form.label + index}
                        className={styles["form-cell"]}
                    >
                        {formRenderPicker(form.formType, form)}
                        {errors[form.name] && (
                            <p className={styles["error-msg"]}>此欄位必填</p>
                        )}
                    </div>
                ))}
                <input
                    type="submit"
                    value="建立"
                    className={`${styles["footer-create"]} ${
                        isValid ? "" : styles["disabled"]
                    }`}
                />
            </form>
        </div>
    );
}

Form.propTypes = {};

export default Form;
