import {configureStore} from "@reduxjs/toolkit";
import reducers from "@src/app/lib/reducers";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "@src/app/lib/root-saga";

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga)
