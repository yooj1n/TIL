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

### 5. LogIn UI

기본적인 특징이 같은 div들이 여러개 있을 때 모든 박스의 기본이 되는 박스를 하나 만들고 그 다음에, 차이가 있는 특징을 적용하기 위해 다른 박스를 만들고 extend를 상속한다.
&:: placeholder, &:last-child (규칙)

### 6. Shared Components

- Routes들을 Link 태그로 하나씩 걸면 오타 에러가 나도 찾기가 힘들다. 그래서 따로 routes.js 파일을 만들어 모아놓고 관리하면 오타 에러를 줄일 수 있다.
- 각 페이지들의 반복적인 스타일들(공유될 수 있는 각 컴포넌트들)을 개별의 컴포넌트 파일을 만들어서 공유할 수 있도록 한다.
  (src > component > auth 폴더 참고)

### 7. Helmetprovider

창의 제목 바꿔주려면 바꿀 해당페이지에서 맨위에 Helmet 태그로 작성해주고
App.js에서 전체를 HelmetProvider로 감싸줘야한다.

### 8. React Hook Forms

useForm을 사용하여 input을 쉽게 핸들링 할 수 있음

### 9. Apollo client

Apollo.js에 new Apolloclient로 백엔드 서버 uri와 cache 설정을 해준다.
App.js에서 ApolloProvider로 감싸준다.

### 10. Login Mutation

### 11. Sign up

### 12. Dark Mode

### 13. Header and Layout

Header를 감싸고 있는 Layout 컴포넌트(Layout.js)를 하나 만들어서 App.js에서
원하는 페이지에만 Layout을 감싸준다.
