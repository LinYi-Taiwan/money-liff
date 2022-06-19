import liff from "@line/liff/dist/lib";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { flexBox } from "@/layouts/LineOnly";
import { useRedux } from "../../util/hook/useRedux";

import {
    lineInit,
    lineShareTargetPicker,
    lineSendMsgToCurrentChat,
    getLineUserProfile,
} from "../../util/line";

import { isUserOrRegister } from "@/util/api/user";

export const getProfile = createAsyncThunk("liff/getProfile", async () => {
    await lineInit();

    if (!liff.isLoggedIn()) {
        liff.login();
    }

    const data = getLineUserProfile();
    await isUserOrRegister(data);

    return data;
});

export const sendFlexMsg = createAsyncThunk(
    "liff/sendFlexMsg",
    async (journeyData) => {
        const { arrivedTime, destination, googleMapUri } = journeyData;
        const data = await lineSendMsgToCurrentChat(
            flexBox({
                arrivedTime: arrivedTime,
                destination: destination,
                googleMapUri: googleMapUri,
            })
        );
        if (data) {
            alert("successful");
        } else {
            console.log(data);
        }
        return data;
    }
);

export const profileSlice = createSlice({
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

const actionsMap = {
    getProfile,
    sendFlexMsg,
};
console.log(profileSlice.actions);
export const useProfile = () => useRedux(selectProfile, actionsMap);

export default profileSlice.reducer;
