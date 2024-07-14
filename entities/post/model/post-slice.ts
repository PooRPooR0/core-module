import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Post} from 'CustomCore/entities/post';

type SliceType = {
    data: Array<Post>,
    loading: boolean,
}

const initialState: SliceType = {
    data: [],
    loading: false,
}

const reducers = {
    getPosts: (state: SliceType) => ({
        ...state,
        loading: true,
    }),
    receivePosts: (state: SliceType, {payload}: PayloadAction<Array<Post>>) => ({
        ...state,
        loading: false,
        data: payload,
    }),
    changePostsLoading: (state: SliceType, {payload}: PayloadAction<boolean>) => ({
        ...state,
        loading: payload,
    })
}

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: reducers
});

export default postSlice.reducer;
export const {getPosts, receivePosts, changePostsLoading} = postSlice.actions;
