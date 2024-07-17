import {all} from 'redux-saga/effects'
import sagas from "@src/app/lib/sagas";

export default function* rootSaga() {
    yield all(sagas)
}
