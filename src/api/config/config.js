import axios from "axios";
import { domain } from "./env";

export const api = axios.create({
    baseURL: domain(),
    headers: { "Content-Type": "application/json" },
});
