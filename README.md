# 페이워크 TodoList
> TypeScript, React, Redux, Redux-saga를 활용한 투두리스트 구현

## [🔗 배포 주소](https://paywork-todolist-with-redux.netlify.app/)

![투두리스트](https://user-images.githubusercontent.com/65386533/131763421-49ca1ab8-e71e-428b-b278-03d0b111796d.png)

## 기능 구현 사항
- [x] `typeScript`와 `react`를 활용한 투두리스트 구현
- [x] `redux`를 활용한 전역 상태 관리
- [ ] `redux-saga`를 활용한 투두리스트 호출 비동기 처리 (서버 있다고 가정하고 작업)


## 설치 및 시작 방법
```
// 레포지토리 클론
git clone https://github.com/bohyunkang/ts-todolist-redux-saga.git
// 해당 프로젝트 디렉토리 이동
cd ts-todolist-redux-saga
// dependencies 설치
npm install
// 프로젝트 실행
npm start
```

## 추가로 해야 할 작업
- [ ] `Mock Server` 혹은 `node.js` 활용한 서버 API 호출
- [ ] 비동기 호출을 위한 `redux-saga` 적용
- [ ] `createdAt` UTC → GMT 기준으로 수정
- [ ] 수정 버튼 눌렀을 때, 수정 input 창에 focus 이동하게 하기
- [ ] 완료되지 않은 항목 삭제하려고 할 때 바로 삭제 안 되게 예외처리

## 사용한 기술 및 라이브러리
- typeScript
- react
- redux
- axios
- styled-components
- styled-reset
