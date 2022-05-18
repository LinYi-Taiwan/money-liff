import React, { useMemo, useState, useEffect } from "react";
import styles from "./index.module.scss";
import { useForm, Controller } from "react-hook-form";

function Count({ formContent, register, setValue }) {
    const [count, setCount] = useState(1);

    useEffect(() => {
        setValue(formContent.name, Number(count));
    }, [count]);

    return (
        <>
            <label>{formContent.label}</label>
            <div className={styles["count-container"]}>
                {count} {""}人
                <div className={styles["action-container"]}>
                    <div
                        onClick={() => {
                            count > 1 ? setCount((prev) => prev - 1) : "";
                        }}
                        className={styles["action"]}
                    >
                        －
                    </div>
                    <div
                        onClick={() => setCount((prev) => prev + 1)}
                        className={styles["action"]}
                    >
                        ＋
                    </div>
                    <input
                        {...register(formContent.name, {
                            required: formContent.required,
                        })}
                        value={count}
                        type={formContent.dataType}
                    />
                </div>
            </div>
        </>
    );
}

Count.propTypes = {};

export default Count;
