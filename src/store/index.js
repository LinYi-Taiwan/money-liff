import { configureStore } from "@reduxjs/toolkit";
import profile from "./slice/liff";
import group from "./slice/group";

export const store = configureStore({
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }),
    reducer: {
        profile: profile,
        group: group,
    },
});
