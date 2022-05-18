import React, { forwardRef, useImperativeHandle } from "react";
import styles from "./index.module.scss";

const Input = forwardRef(({ register, formContent }, ref) => {
    console.log("ref", ref);
    useImperativeHandle(
        ref,
        () => ({
            isValidate: () => {},
        }),
        []
    );
    return (
        <>
            <label htmlFor={formContent.label}>
                {formContent.label}
                {formContent.required && <span>*</span>}
            </label>
            <input
                {...register(formContent.name, {
                    required: formContent.required,
                })}
                type={formContent.dataType}
            />
        </>
    );
});

export default Input;
