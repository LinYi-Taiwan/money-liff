import { createSlice } from "@reduxjs/toolkit";
import logo from "@/images/logo.png";
import { useRedux } from "../../util/hook/useRedux";

export const groupSlice = createSlice({
    name: "group",
    initialState: {
        groupList: [
            { id: 1, name: "group1", image: logo },
            { id: 2, name: "group2", image: logo },
            { id: 3, name: "group3", image: logo },
        ],
    },
    reducers: {
        createGroup: (state, { payload }) => {
            state.groupList.push(payload);
        },
    },

    extraReducers: {},
});

export const selectGroup = (state) => state.group;

export const useGroup = () => useRedux(selectGroup, groupSlice.actions);

export default groupSlice.reducer;
