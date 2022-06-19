import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import logo from "@/images/logo.png";
import { useRedux } from "../../util/hook/useRedux";
import { createGroupApi, getGroupApi } from "../../util/api/group";

export const createGroup = createAsyncThunk(
    "CREATE_GROUP",
    async (groupInfo, { dispatch }) => {
        const data = await createGroupApi(groupInfo);
        dispatch(getGroup());

        return data;
    }
);

export const getGroup = createAsyncThunk("GET_GROUP", async () => {
    const { data } = await getGroupApi();

    return data;
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
    reducers: {},

    extraReducers: {
        [createGroup.fulfilled]: (state) => ({ ...state }),
        [getGroup.fulfilled]: (state, action) => ({
            ...state,
            groupList: action.payload.result,
        }),
    },
});

export const selectGroup = (state) => state.group;

const actionsMap = {
    createGroup,
    getGroup,
};
export const useGroup = () => useRedux(selectGroup, actionsMap);

export default groupSlice.reducer;
