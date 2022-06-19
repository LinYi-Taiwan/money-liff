import axios from "axios";
import { domain } from "./env";
import { getLocalStorageLineInfo } from "./token";

export const api = axios.create({
    baseURL: domain(),
    headers: {
        "Content-Type": "application/json",
        "Line-id": "",
    },
});

api.interceptors.request.use(
    function (config) {
        config.headers["Line-id"] = getLocalStorageLineInfo().sub;
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);
