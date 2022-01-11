// Board.js

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { boardActions } from '../slices/boardSlice';

function Board() {
    const { boardList, status, statusText } = useSelector((state) => state.boardReducer);
    // boardSlice.js 의 boardSlice 에서 reducer 항목의 boardReducer의 state 구독할 useSelector
    // useSelec를 통해 state라는 변수안에 state.boardReducer 의 모든 state를 변수에 담는다 

    console.log(`useSelect 테스트용` , status , boardList);
  

    const dispatch = useDispatch();
    // redux 훅인 useDispatch를 사용하기위해 dispatch 변수에담았고
    // 이로인해 prop.dispatch 같이 여러 경로를통한 사용이 불필요
  
    useEffect(() => {
      // 해당 컴포넌트가 업데이트될때 혹은 랜더링될때
      // 해당 컴포넌트가 mount 되었을때
      // useEffect 코드가 실행됨
        dispatch(boardActions.getBoardList());
    }, [dispatch])
    return (
        <div>
            <ul >
                <li >
                    <Link to="/">
                        <span>Main</span>
                    </Link>
                </li>
                <li >
                    <Link to="/board/1">
                        <span>board1</span>
                    </Link>
                </li>
                <li >
                    <Link to="/board/2">
                        <span>board2</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Board;
 