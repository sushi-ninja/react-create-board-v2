// rootSaga.js

import { map } from 'ramda';
import { all, fork  } from "redux-saga/effects"
// redux-saga 에서 쓰이는 헬퍼함수중 all과 fork를 쓰기위해 /effects 에서 가져옴


let combineSagas = {};

export default function* rootSaga() {
    yield all(map(fork, combineSagas));
}
