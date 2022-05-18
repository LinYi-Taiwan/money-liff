import React from "react";
import styles from "./index.module.scss";
import SelectLib from "react-select";

function Select(ele) {
    const { formContent } = ele;
    const { min, max } = formContent;

    const customStyles = {
        input: (provided, state) => ({
            ...provided,
            width: 10,
            borderBottom: "1px dotted pink",
            color: state.selectProps.menuColor,
        }),
    };

    const range = (start, end) => {
        return Array(end - start + 1)
            .fill()
            .map((_, idx) => start + idx);
    };

    const options = [
        { value: "chocolate", label: "Chocolate" },
        { value: "strawberry", label: "Strawberry" },
        { value: "vanilla", label: "Vanilla" },
    ];
    const numInterval = range(min, max);

    return (
        <>
            <label htmlFor={formContent.label}>
                {formContent.label} {formContent.required && <span>*</span>}
            </label>
            <SelectLib styles={customStyles} options={options}></SelectLib>
            {/* <select name="" id="">
                {numInterval.map((num) => {
                    return (
                        <option key={"option" + num} value={num}>
                            {num}
                        </option>
                    );
                })}
            </select> */}
        </>
    );
}

Select.propTypes = {};

export default Select;
