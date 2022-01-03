// rootSaga.js

import { map } from 'ramda';
import { all, fork  } from "redux-saga/effects"
// redux-saga 에서 쓰이는 헬퍼함수중 all과 fork를 쓰기위해 /effects 에서 가져옴
import boardSaga from "./sagas/boardSaga"


let combineSagas = {};

combineSagas = Object.assign(combineSagas, { boardSaga});
// combineSagas 라는 객체안에 Object.assign 함수를통해 
// combineSagas 객체에 boardSaga 배열복사해 대상객체(combineSagas)에 붙여넣는다

export default function* rootSaga() {
  yield all(
    map(
    // map 은 배열의 각요소에 맵핑을 할수있다
      fork, // 비동기적 함수 호출
      combineSagas // Object.assign함수로 인해 반환된 배열
    ));
}
// function* 은 제네레이터로서 사용되는 문법이며
// 함수 실행을 중간에 멈출수있고 
// 원할때 재개할수있어 편하다
// 보통 무한의 개념을 표현할때와 비동기 처리할때 많이쓰인다
