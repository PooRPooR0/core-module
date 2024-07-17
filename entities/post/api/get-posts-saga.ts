import {call, put} from "redux-saga/effects";
import {changePostsLoading, receivePosts} from "@src/entities/post";

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

export default getPostsSaga;
