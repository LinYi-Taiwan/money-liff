import liff from "@line/liff/dist/lib";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { flexBox } from "@/layouts/LineOnly";

import {
    lineInit,
    lineShareTargetPicker,
    getLineUserProfile,
} from "../../util/line";

export const getProfile = createAsyncThunk("liff/getProfile", async () => {
    await lineInit();

    if (!liff.isLoggedIn()) {
        liff.login();
    }
    const data = await getLineUserProfile();
    console.log("shareResult");
    return data;
});

export const sendFlexMsg = createAsyncThunk("liff/sendFlexMsg", async () => {
    const data = await lineShareTargetPicker(flexBox());
    if (data) {
        alert("successful");
    }
    return data;
});

export const profile = createSlice({
    name: "profile",
    initialState: {
        user: {
            name: "linyi",
            picture: "hello",
        },
    },
    reducers: {
        //...
    },
    extraReducers: {
        [getProfile.pending]: (state) => {
            state.loading = true;
        },
        [getProfile.fulfilled]: (state, { payload }) => {
            console.log(payload);
            state.loading = false;
            state.user = payload;
        },
        [getProfile.rejected]: (state) => {
            state.loading = false;
        },
    },
});

export const selectProfile = (state) => state.profile;

export default profile.reducer;
