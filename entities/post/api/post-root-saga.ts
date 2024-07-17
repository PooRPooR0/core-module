import {takeLatest } from 'redux-saga/effects'
import {getPosts} from "@src/entities/post";
import getPostsSaga from "@src/entities/post/api/get-posts-saga";

export default function* postRootSaga() {
    yield takeLatest(getPosts, getPostsSaga)
}
