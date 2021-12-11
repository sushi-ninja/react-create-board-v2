// store.js

import { configureStore } from "@reduxjs/toolkit";
// redux를 ㄹ보다 편리하게 사용하기 위해 제공되는 redux 개발도구
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import rootReducer from "../rootReducer";
import rootSaga from "../rootSaga";
import history from "./history";

const sagaMiddleware = createSagaMiddleware({
    context: { history: history },
});
const initialState = {};

const store = configureStore({
    reducer: rootReducer, //리듀서들을 정의
    middleware: [sagaMiddleware, logger], //미들웨어 정의
    devTools: true,
    preloadedState: initialState,
});

sagaMiddleware.run(rootSaga);

export default store;
