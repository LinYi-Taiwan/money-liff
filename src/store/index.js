import { configureStore } from "@reduxjs/toolkit";
import profile from "./slice/liff";

export const store = configureStore({
    reducer: {
        profile: profile,
    },
});
