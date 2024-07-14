import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {changePostsLoading, getPosts, receivePosts} from "CustomCore/entities/post";

function* getPostsSaga() {
    try {
        // @ts-ignore
        const response = yield call(fetch, 'https://jsonplaceholder.typicode.com/posts')
        // @ts-ignore
        const data = yield response.json()
        yield put(receivePosts(data))
    } catch (error) {
        yield put(changePostsLoading(false));
    }
}

export default function* postSaga() {
    yield takeLatest(getPosts, getPostsSaga)
}