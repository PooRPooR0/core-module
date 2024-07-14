import {all} from 'redux-saga/effects'
import sagas from "CustomCore/app/lib/sagas";

export default function* rootSaga() {
    yield all(sagas)
}