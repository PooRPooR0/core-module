import Post from "@src/entities/post/lib/post";
import {PostSliceType} from "@src/entities/post/model/post-slice-initial-state";
import {PayloadAction} from "@reduxjs/toolkit";

const PostSliceReducers = {
    getPosts: (state: PostSliceType) => ({
        ...state,
        loading: true,
    }),
    receivePosts: (state: PostSliceType, {payload}: PayloadAction<Array<Post>>) => ({
        ...state,
        loading: false,
        data: payload,
    }),
    changePostsLoading: (state: PostSliceType, {payload}: PayloadAction<boolean>) => ({
        ...state,
        loading: payload,
    })
}

export default PostSliceReducers
