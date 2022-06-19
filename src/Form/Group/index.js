export default {
    title: "建立群組",
    formContent: [
        {
            label: "群組名稱",
            name: "name",
            formType: "input",
            dataType: "text",
            required: true,
            action: "",
            checkFunc: "",
        },
        {
            label: "人數",
            name: "user_limit",
            formType: "count",
            dataType: "number",
            required: true,
            action: "",
            checkFunc: "",
            min: 1,
            max: 10,
        },
        {
            label: "群組圖片",
            name: "image_url",
            formType: "upload",
            dataType: "text",
            required: false,
            action: "",
            checkFunc: "",
        },
    ],
};
