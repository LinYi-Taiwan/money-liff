import { createAction, createSlice } from "@reduxjs/toolkit";
import logo from "@/images/logo.png";
import { useRedux } from "../../util/hook/useRedux";
import { createGroup as createGroupApi } from "../../util/api/group";

export const createGroup = createAction("CREATE_GROUP", async (groupInfo) => {
    console.log("group info", groupInfo);
    const data = createGroupApi();
    console.log(data);
});

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
        CREATE_GROUP: (state) => ({
            ...state,
        }),
    },

    extraReducers: {},
});

export const selectGroup = (state) => state.group;

const actionsMap = {
    createGroup,
};
export const useGroup = () => useRedux(selectGroup, actionsMap);

export default groupSlice.reducer;
