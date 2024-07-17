import type Post from '@src/entities/post/lib/post'
import type {PostSliceType} from '@src/entities/post/model/post-slice-initial-state'
import {PostSliceInitialState} from '@src/entities/post/model/post-slice-initial-state'
import postReducer from '@src/entities/post/model/post-slice'
import {PostSliceActions} from '@src/entities/post/model/post-slice'
import PostSliceReducers from '@src/entities/post/model/post-slice-reducers'
import postRootSaga from '@src/entities/post/api/post-root-saga'

export {Post}
export {PostSliceType}
export {PostSliceInitialState}
export {PostSliceReducers}

export const {getPosts, receivePosts, changePostsLoading} = PostSliceActions
export {postReducer}
export {postRootSaga}
