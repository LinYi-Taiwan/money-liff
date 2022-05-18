export const validateRequired = (value) => {
    return { validation: value.length !== 0, msg: "不可為空值" };
};

const validateMaxLen = (inputVal) => (compareVal) => {
    return inputVal < compareVal;
};
