export const domain = () => {
    return process.env.NODE_ENV === "development"
        ? "http://127.0.0.1:8080"
        : "";
};