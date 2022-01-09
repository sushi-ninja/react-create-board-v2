// /sagas/boardSaga.js

import { all, call, fork, put, take } from 'redux-saga/effects';
import { boardActions } from '../slices/boardSlice';
import axios from '../utils/axios';

// api 서버 연결 주소
function apiGetBoard(boardId) {
    return axios.get(`boards/${boardId}`); // json-server 의 boards/id 에서 데이터를가져옴
}

function apiGetBoardList() {
    return axios.get(`boards`); // json-server 의 boards 에서 데이터를 가져옴
}

// api 서버 연결 후 action 호출
// json-server에서 정상적으로 데이터가 불러와졌음을 확인
function* asyncGetBoardList() {
    try {
        const response = yield call(apiGetBoardList);
        console.log(response);
        if(response?.status === 200){
          yield put(boardActions.getBoardListSuccess(response));
        }else{
          yield put(boardActions.getBoardListFail(response));
        }
    } catch(e) {
        console.error(e);
        yield put(boardActions.getBoardListFail(e.response));
    }
}

// action 호출을 감시하는 watch 함수
function* watchGetBoardList() {
    while(true) {
        yield take(boardActions.getBoardList);
        yield call(asyncGetBoardList);
    }
}

export default function* boardSaga()
{
    yield all([fork(watchGetBoardList)]);
}
 