// boardSlice.js

import { createSlice } from "@reduxjs/toolkit";

const name = "board";

const initialState = {
  boardList: [], //추가
};
// initalState는 object형태로 되어있어서 받고싶은 자료의 이름을 key로,
// value 에는 자료형까지도 미리 선언해놓을수있다

const reducers = {
  getBoardList: (state, action) => {}, // view에서 호출
  getBoardListSuccess: (state, action) => {}, // saga에서 api 연결 성공시 return 값 적용
  getBoardListFail: (state, action) => {}, // api 연결 실패시 return 값 적용 
};

const boardSlice = createSlice({
    name,
    initialState,
    reducers
});



export const boardReducer = boardSlice.reducer;
export const boardActions = boardSlice.actions;
 