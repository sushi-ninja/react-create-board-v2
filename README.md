## 리액트로 crud 구현하기 공부중
[https://binaryjourney.tistory.com/49]

### 설치항목들
[yarn add redux react-redux react-router react-router-dom redux-saga @reduxjs/toolkit axios redux-logger ramda query-string]

---

### redux@toolkit
기본 튜토리얼[https://soyoung210.github.io/redux-toolkit/tutorials/basic-tutorial]
리덕스 툴 킷 총정리[https://velog.io/@kingyong9169/Redux-Tool-kit-%EC%B4%9D%EC%A0%95%EB%A6%AC]

redux toolkit 은 기본적으로 createStore()를 랩핑하고있는 configureStore()함수를 제공한다

하지만 configureStore는 store를 생성하는 단계에서 몇 가지 유용한 개발 도구가 설정되도록 해야한다
configureStore에 관한 블로그[https://mjn5027.tistory.com/36]<br>
ReduxToolkit 을 이용한 튜토리얼[https://oyg0420.tistory.com/entry/ReactjsRedux-Toolkit%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%B4-TodoList%EB%A7%8C%EB%93%A4%EA%B8%B0]




### redux 개념,구조,실습
[https://hwan1001.tistory.com/38]

### redux 간편설명 
[https://youtu.be/wSbjROmXTaY?t=337]

#### Redux란?

- 리액트에서 상태를 더 효율적으로 관리하는 데 사용하는 상태 관리 라이브러리

- 리덕스는 쉽게 설명하면 상태 관리의 로직을 컴포넌트 밖에서 처리 하는 것이다.

- 리덕스를 사용하면 스토어라는 개체 내부에 상태를 담게 된다.




### 리덕스와 리덕스 사가 에 대한 기본적인 원리
리덕스[https://www.youtube.com/watch?v=Mb2mvZd9XUM]<br>
리덕스 사가[https://www.youtube.com/watch?v=MwvwrYHBs34]<br>
리덕스 사가 블로그 [https://okayoon.tistory.com/entry/Redux-saga]<br>


### 자주 사용하는 헬퍼 함수
redux-saga는 스토어에 지정된 액션들이 디스패치되었을 때,
task를 만들기 위해 내부 함수들을 감싸는 헬퍼 이펙트를 제공합니다. 
(task는 작업단위의 실행단위를 의미한다 대안이 되는 용어로는 프로세스, 경량프로세스,스레드,스텝,요청 등등이있다)


#### fork
함수 비동기적 호출

#### all
제너레이터 함수를 배열의 형태로 인자로 넣어주면 병렬로 동시에 실행됩니다.
이때 모든 함수에 대한 결과가 resolve될 때까지 블럭됩니다. 

#### put
특정 액션의 디스패치하도록 합니다.
결과를 스토어에 디스패치(put) 합니다.

특정 액션을 dispatch하도록 한다.
예시: put({type: 'INCREMENT]})
→ INCREAMENT action을 dispatch한다.

#### call, apply
순수 객체만 리턴하는 함수입니다. 오브젝트 메소드 호출을 지원합니다.
첫번째 파라미터는 함수이며 나머지 파라미터는 해당 함수에 넣을 인수 값 입니다.
액션이 발생하면 전달한 함수를 호출하여 실행합니다.
API가 리턴될때까지 블럭되며, 비동기 함수 호출 시 용이합니다.
call과 apply는 두번째 인자 값의 차이만 있습니다.

#### call
함수를 동기적으로 호출할때 사용

함수의 첫 번째 파라미터는 함수, 나머지 파라미터는 해당 함수에 넣을 인수이다.
예시: call(delay, 1000)
→delay(1000)함수를 call함수를 사용해서 이렇게 쓸 수도 있다.

call과 put의 다른 점은 put은 스토어에 인자로 들어온 action을 dispatch하고, call인 경우에는 주어진 함수를 실행하게 되는 것이다.


#### delay
설정된 시간 이후에 resolve를 하는 Promise 객체를 리턴합니다.
제너레이터를 정지하는데 사용할 수 있습니다.

설정된 시간 이후에 resolve하는 Promise객체를 리턴한다.
예시: delay(1000)
→ 1초 기다리기

#### takeEvery
액션이 발생하게되면 task를 실행합니다.
task가 종료되기 전에 또 다른 액션이 발생할 경우, 또 하나의 새로운 task를 실행합니다.

들어오는 모든 액션에 대해 특정 작업을 처리해 준다.
예시: takeEvery(INCREASE_ASYNC, increaseSaga)
→ 들어오는 모든 INCREASE_ASYNC액션에 대해 increaseSaga 함수 실행

#### takeLatest
액션이 발생하게되면 task를 실행합니다.
만약 실행 중인 task가 있다면 기존 task를 종료하고 새로운 task를 실행합니다.
실수로 여러번 클릭했을때를 방지하거나 마지막에 요청된 데이터를 보여줄 때 사용합니다.

기존에 진행 중이던 작업이 있다면 취소 처리하고 가장 마지막으로 실행된 작업만 수행한다.
예시: takeLatest(DECREASE_ASYNC, decreaseSaga)
→ DECREASE_ASYNC액션에 대해서 기존에 진행 중이던 작업이 있다면 취소 처리하고 가장 마지막으로 실행된 작업에 대해서만 decreaseSaga함수를 실행한다.

#### takeLeading
액션이 발생하게되면 task를 실행합니다.
해당 task의 실행이 완료되기 전까지 뒤에 오는 이벤트들을 블럭합니다.
이후 task가 완료되면 액션에 대해 수신합니다.

#### throttle
요청을 한 번만 보냅니다.
마지막 함수가 호출된 후 일정 시간이 지나기 전 재 호출하지 않습니다.
스크롤 이벤트 사용 시 용이합니다.

#### debounce
요청을 한 번만 보냅니다.
처음 함수나 마지막 함수만 호출 후 일정시간이 지나기 전 재 호출하지 않습니다.

출처: https://okayoon.tistory.com/entry/Redux-saga [Zzolab Blog :)]
--- 


해당 crud 공부파일 실행법은 다음과같다<br>
1. 아무파일이나 클릭하면 좌측하단에 NPM 스크립트 라는 메뉴가 생긴다
2. 해당메뉴에는 packge.json에 미리 작성된대로 script문이 실행될수있게 ui가 준비되어있다
3. 오른쪽 플레이 버튼을 눌러 실행할수있으며 start는 해당 프로젝트를 실행하고 server는 간이서버로 만들어진 json-server 가 실행된다 



json-server(테스트용 로컬 서버)는 외부 폴더에 자리하고있으며
이를 실행하기위해서는 
sidebar 에 있는 npmscript 에서 serber\package.json 의<br>
start 옆 실행버튼을 눌러 실행해주면 <br>
package.json 에 미리 입력된 실행코드대로 port번호를따라 실행된다


### radma 
람다는 함수형프로그래밍을위한 라이브러리이며 그이상도 그이하도아니다<br>
[https://www.youtube.com/watch?v=r_MZ0xCv1_A] 자세한건 해당영상에서 확인가능

### redux-saga
리덕스의 미들웨어 이며
리덕스가 액션을 수행하면 redux-saga에서 디스패치하여 redux액션을 가로채고 액션의 역할을 수행하며<br>
다시 애션을 발행하여 데이터를 저장하거나 다른 이벤트를 수행시킨다
d
리덕스의 미들웨어에 관한 블로그<br>
[https://redux-advanced.vlpt.us/]

### lazy 와 Suspense
코드 스플리팅(Code Splitting)

코드 스플리팅의 원리는 간단하다 한개의 파일에서 처음부터 모든걸 불러오는게아니라
우리가 설정하는대로 컴포넌트가 실제로 필요핼질때 나중에 불러오는것이다

#### lazy
React.lazy는 컴포넌트를 렌더링하는 시점에서 비동기적으로 로딩할 수 있게 해 주는 유틸 함수이다

```
const SplitMe = React.lazy(()=> import('./SplitMe'));
```

#### suspense
Suspense는 리액트 내장 컴포넌트로서 코드 스플리팅된 컴포넌트를 로딩하도록 발동시킬 수 있고, 로딩이 끝나지 않았을 때 보여 줄 UI를 설정할 수 있다 사용 방법은 다음과 같다

```
import React,{Suspense} from 'react';

<Suspense fallback={<div>loading...</div>}>
  <SplitMe/>
</Suspense>
```

Suspense에서 fallback props를 통해 로딩 중에 보여 줄 JSX를 지정할 수 있다.


### 리액트에서 가장 유명한 패턴
[https://velog.io/@seong-dodo/React-Presentational%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EC%99%80-Container%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8]<br>

리액트에서 가장 유명한 패턴인이자 가독성과 생산성을 고려한 방법인 프레젠테이션 컴포넌트와 컨테이너 컴포넌트에 대해 알아보려고 한다.

#### Presentational 컴포넌트
1. 데이터 출력, 데이터 처리 능력은 없음, no logic
2. DOM 마크업과 스타일 담당(UI)
3. Redux와 관련 없음
4. 부모 컴포넌트로부터 받은 Props인 데이터와 콜백(callback)을 사용

#### Container 컴포넌트
1. 데이터 처리 능력 있음, 동작(behavior) logic, API Request, Exception Error, setState... ETC ...
2. Redux와 관련 있음
3. 렌더링 되어야 할 데이터를 props로써 데이터 처리 능력이 없는 Presentational 컴포넌트로 전달


#### App 컴포넌트 👈 이런게 바로 프레젠테이션 컴포넌트다!
```
import React from 'react';

import InputContainer from './InputContainer';

export default function App() {
  return (
    <InputContainer />
  );
}
```

위처럼 담아낸것을 결과적으로 표현하는게 프레젠테이션 컴포넌트이며

#### InputContainer 컴포넌트 👈 이런게 바로 컨테이너 컴포넌트다!
```
import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Input from './Input';

import {
  updateTaskTitle,
  addTask,
} from './actions';

export default function InputContainer() {
  const { taskTitle } = useSelector((state) => ({
    taskTitle: state.taskTitle,
  }));

  const dispatch = useDispatch();

  function handleChangeTitle(event) {
    dispatch(updateTaskTitle(event.target.value));
  }

  function handleClickAddTask() {
    dispatch(addTask());
  }

  return (
    <Input
      value={taskTitle}
      onChange={handleChangeTitle}
      onClick={handleClickAddTask}
    />
  );
}
```

위처럼 표현될 컴포넌트의 실상이되는 컴포넌트가 컨테이너 컴포넌트이다

### slice 
[https://velog.io/@goonerholic/Redux-Toolkit-createSlice-%EC%95%8C%EC%95%84%EB%B3%B4%EA%B8%B0]

```
redux toolkit 문법 이용하면 reducer가 아니라 createSlice를 만듭니다 

슬라이스에는 state와 그 state를 수정하는 방법들이 들어있습니다

그냥 reducer와 state기본값 보관함입니다 

 

redux saga는 리덕스로 dispatch 날리는걸 중간에 가로채서

서버와 ajax 통신을 해주고

통신이 완료되면 dispatch 계속 진행시켜주는 라이브러리입니다
```
코딩애플 강사가 남긴댓글



### axios 
[https://kyun2da.dev/%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC/axios-%EA%B0%9C%EB%85%90-%EC%A0%95%EB%A6%AC/]
바닐라 자바스크립트의 ajax처리인 fetch()와 비교한 axios 개념정리

[https://yamoo9.github.io/axios/guide/usage.html#post-%EC%9A%94%EC%B2%AD]
axios 러닝가이드

[https://inpa.tistory.com/114]
axios 기본 가이드

ajax 처리를 좀더 원활하고 간단하게 하기위해 설치하는 라이브러리이다

