import type Post from 'CustomCore/entities/post/lib/post'
import type {PostSliceType} from 'CustomCore/entities/post/model/post-slice-initial-state'
import {PostSliceInitialState} from 'CustomCore/entities/post/model/post-slice-initial-state'
import postReducer from 'CustomCore/entities/post/model/post-slice'
import {PostSliceActions} from 'CustomCore/entities/post/model/post-slice'
import PostSliceReducers from 'CustomCore/entities/post/model/post-slice-reducers'
import postRootSaga from 'CustomCore/entities/post/api/post-root-saga'

export {Post}
export {PostSliceType}
export {PostSliceInitialState}
export {PostSliceReducers}

export const {getPosts, receivePosts, changePostsLoading} = PostSliceActions
export {postReducer}
export {postRootSaga}