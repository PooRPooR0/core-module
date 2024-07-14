import {createSlice} from "@reduxjs/toolkit";
import {PostSliceInitialState} from 'CustomCore/entities/post/model/post-slice-initial-state';
import PostSliceReducers from 'CustomCore/entities/post/model/post-slice-reducers';

const postSlice = createSlice({
    name: "post",
    initialState: PostSliceInitialState,
    reducers: PostSliceReducers
});

export default postSlice.reducer;
export const PostSliceActions = postSlice.actions;
