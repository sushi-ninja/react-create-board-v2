리액트로 crud 구현하기 공부중
[https://binaryjourney.tistory.com/49]

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