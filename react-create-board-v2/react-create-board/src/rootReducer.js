// rootReducer.js

import { combineReducers } from 'redux';

import { articleReducer } from './slices/articleSlice';
import { boardReducer } from './slices/boardSlice';


const rootReducer = combineReducers({ articleReducer, boardReducer });
//combineReducers는 리듀서가 여러개일 때, 합쳐서 루트 리듀서로 만들기 위해서 사용하는 함수이다.

export default rootReducer;
