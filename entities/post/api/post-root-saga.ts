import {takeLatest } from 'redux-saga/effects'
import {getPosts} from "CustomCore/entities/post";
import getPostsSaga from "CustomCore/entities/post/api/get-posts-saga";

export default function* postRootSaga() {
    yield takeLatest(getPosts, getPostsSaga)
}