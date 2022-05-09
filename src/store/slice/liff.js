import liff from "@line/liff/dist/lib";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getProfile = createAsyncThunk("liff/getProfile", async () => {
    const data = await liff
        .init({
            liffId: import.meta.env.VITE_LIFF_ID,
        })
        .then(() => {
            if (!liff.isLoggedIn()) {
                liff.login();
            }

            return liff.getDecodedIDToken();
        })
        .catch((e) => {
            setMessage("LIFF init failed.");
            setError(`${e}`);
        });

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
