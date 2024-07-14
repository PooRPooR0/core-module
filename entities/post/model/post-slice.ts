import {createSlice} from "@reduxjs/toolkit";

type SliceType = {data: Array<any>}

const initialState: SliceType = {
    data: []
}

const reducers: Record<string, ReducerFunction | ReducerAndPrepareObject> = {
    getPosts: (state) => ({
        ...state,
    })
}

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers,
});

export default postSlice.reducer;
export const {getPosts} = postSlice.actions;
