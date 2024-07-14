import type Post from 'CustomCore/entities/post/lib/post'
import postReducer from 'CustomCore/entities/post/model/post-slice'
import {getPosts, receivePosts, changePostsLoading} from 'CustomCore/entities/post/model/post-slice'

export {Post}
export {postReducer}
export {getPosts, receivePosts, changePostsLoading}