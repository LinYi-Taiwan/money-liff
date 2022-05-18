import React from "react";
import styles from "./index.module.scss";

function UploadImage({ formContent, register }) {
    return (
        <>
            <label htmlFor="image">
                {formContent.label} {formContent.required && <span>*</span>}
                <input
                    type="file"
                    name="my-image"
                    id="image"
                    accept="image/gif, image/jpeg, image/png"
                    className={styles["image-input"]}
                    {...register(formContent.name, {
                        required: formContent.required,
                    })}
                />
                <div className={styles["upload-container"]}>
                    <img className={styles["upload-icon"]} src="" alt="" />
                    <div>上傳圖片</div>
                    <div>（大小上限為 10 mb）</div>
                </div>
            </label>
        </>
    );
}

UploadImage.propTypes = {};

export default UploadImage;
