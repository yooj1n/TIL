# Instagram Web

## installation

- npm i <package 이름> 로 한번에 설치 가능.
- [x] npm i styled-components
- [x] npm i react-hook-form
- [x] npm i react-router-dom
- [x] npm i @apollo/client graphql
- [x] npm i react-helmet-async
- [x] npm i --save @fortawesome/fontawesome-svg-core
- [x] npm install --save @fortawesome/free-solid-svg-icons
- [x] npm install --save @fortawesome/react-fontawesome
- [x] npm install --save @fortawesome/free-brands-svg-icons
- [x] npm install --save @fortawesome/free-regular-svg-icons
- [x] npm i styled-reset

## Setup

- [x] Router
- [x] Authentication
- [x] Arch.
- [x] Styles

## 정리

### 1. 설치하기

### 2. Router setup

react Router는 특정 URL로 가게 될 때 components를 보여준다. Router는 hash router, browser router가 있다. brower가 살짝 더 할 게 많음. Route는 기본적으로 매치가 되는 모든 컴포넌트를 렌더한다. 그러지 않기 위해서는 Switch 와 exact를 사용하여 정확히 매치되는 한 가지 컴포넌트만 렌더할 수 있게 해준다.

### 3. React Variables

import { makeVar } from "@apollo/client"; 를 이용하여 사용할 수 있
음.

계속해서 props를 보내서 상태를 변경하는 것은 좋지 않음.
이럴때 사용하는것이 React Variables이다. props를 보내지않고 해당 컴포넌트에서 바꿔줄 수 있음.

### 4. Styled Components

vscode-styled-components 익스텐션 설치
npm i styled-reset 기본적으로 걸려있는 스타일을 리셋시켜준다.
reset을 import하고 ${rest}도 해당 styled 안에 써줘야한다.

```CSS
const something = styled.h1`
color : red;
`;
```

이런식으로 쓸 수 있으며, props를 받을 수도 있다. function에 인자로 props를 쓰면, component로 보내려는 props를 받을 것이다.

light mode 와 dark mode 버젼으로 만드려면 App.js에서 ThemeProvider로 감싸줘야한다.
