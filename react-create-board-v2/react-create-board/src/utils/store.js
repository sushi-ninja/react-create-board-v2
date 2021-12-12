// store.js

import { configureStore } from "@reduxjs/toolkit";
// redux를 보다 편리하게 사용하기 위해 제공되는 redux 개발도구
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import rootReducer from "../rootReducer";
import rootSaga from "../rootSaga";
import history from "./history";

const sagaMiddleware = createSagaMiddleware({
    context: { history: history },
});
// 팩토리 함수를 사용하여 saga미들웨어 생성
// 미들웨어로서 context history를 만드는이유는 https://binaryjourney.tistory.com/50 에서 확인

const initialState = {};

const store = configureStore({
    reducer: rootReducer, //리듀서들을 정의
    middleware: [sagaMiddleware, logger], // store에 마운트 
    devTools: true,
    preloadedState: initialState,
});

sagaMiddleware.run(rootSaga);
// saga 실행

export default store;
