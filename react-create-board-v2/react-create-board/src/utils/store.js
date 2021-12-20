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
// => preloadState

const store = configureStore({
    reducer: rootReducer, //리듀서들을 정의
    middleware: [sagaMiddleware, logger], // store에 마운트 
    devTools: true, //불리언값으로 리덕스 개발자 도구를 끄거나 켭니다.
    preloadedState: initialState, // 스토어의 초기값

    //http://blog.hwahae.co.kr/all/tech/tech-tech/6946/
});

sagaMiddleware.run(rootSaga);
// saga 실행

export default store;
