# momo front-end

## 기존 mobx로 상태관리를 하던 것을 redux, redux-saga로 교체 적용한 프로젝트

- 쉽고 익숙한 객체지향적인 mobX를 더 선호하였으나, 새로운 것을 배우려 react를 도입한 취지에 맞게끔 상태관리 또한 flux 패턴인 redux로 변경
- redux-thunk를 도입하였다가 thunk가 기존 패턴의 흐름을 깨는 듯한 느낌을 받아 redux-saga로 교체
- 동작 확인만 해서 프로젝트 구조와 코드 정리가 필요함
- 기존 class 컴포넌트에서 functional 컴포넌트로 모두 교체. 그리고 hooks 사용. 코드가 훨씬 깔끔해졌다
- material UI와 formik 적용. 비지니스로직에서 UI적으로나 로직적으로도 form에 필요한 코딩이 줄고 통합 벨리데이션 체크도 쉽고 간편해졌다.
