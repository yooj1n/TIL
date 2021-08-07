# 01. 리액트(React)란?

## 정의

---

`React`는 Facebook에서 제공하는 웹 프레임워크로, 자바스크립트 라이브러리의 하나로서 사용자 인터페이스를 만들기 위해 사용된다.

## 특징

---

### `Component 기반 구조`

한 페이지 내에서도 여러가지 부분을 독립된 컴포넌트로 만들고, 이것을 합하여 하나의 화면을 구성한다.

### `Props and State`

`props`란 Read Only Data로, 부모 컴포넌트에서 자식 컴포넌트로 전달해 주는 데이터이다. Props를 전달해준 최상위 부모 컴포넌트만 Props를 변경할 수 있다.
`State`란 컴포넌트 내부에서 선언하며, 사용자와의 상호작용을 통해 데이터를 동적으로 변경할 때 사용한다. Class형 컴포넌트에서만 사용할 수 있으며, 각각의 state는 독립적이다. 어떠한 컴포넌트가 실행될 때 constructor 함수가 있다면 render()보다 먼저 실행되어 초기화 된다.

### `JSX`

JavaScript를 확장한 문법으로, HTML을 섞은 것 같은 문법이다

# 02. 리액트 개발환경(Setting)

## 설치

---

- Nodejs 설치
- Code Editor 설치(Visual Studio Code)
- 작업용 폴더 생성
- 터미널에서 폴더 이동 후 아래와 같이 명령어 입력

## 명령어

---

### `npx create-react-app [프로젝트명]`

터미널에 입력하면 새프로젝트 생성

### `npm run start`

리액트 시작

### `crtl + C`

리액트 종료

### `npm run build`

create-react-app은 용량이 너무 크고 무겁기 때문에,
src 폴더의 내용을 최적화하여, 용량을 줄이고 심미적 문제 해결
build 폴더가 생기는데 그 안에 있는 파일들을 사용하면 됨.

# 03. 리액트 생성된 파일

### index.html

- 웹 브라우저에 출력되는 메인페이지

### index.js

- App.js 파일을 import해서 index.html의 id 값과 같은 것을 연결해줌

### App.js

- 메인페이지에 들어갈 실제 내용을 구현하는 곳이다.
- App이라는 Class를 만들고 Componenet를 상속하며 render()라는 메소드를 통하여 화면에 나타낸다.

```javascript
import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return <div className="App">Hello, Wrold!</div>;
  }
}
export default App;
```

# 기본 구조

## 컴포넌트 생성

---

- 하나의 파일 App.js 안에 여러 컴포넌트가 있다면 가독성이 좋지 않으므로 각 각의 컴포넌트로 쪼개서 파일을 분리하는 것이 좋다.(src > components > 컴포넌트이름.js)

```JavaScript
import React, { Component } from 'react';
import './App.css';

class Content extends Component{
  render(){
    return (
      <div> // 1개의 최상위 태그로 이루어짐.
          <h1>Hello,World!</h1>

      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App"> // 1개의 최상위 태그로 이루어짐.
        <Content></Content>
      </div>
    );
  }
}

export default App;
```

## Props

---

- Read Only Data
- 부모 컴포넌트에서 자식 컴포넌트로 전달해 주는 데이터
- Props를 전달해준 최상위 부모 컴포넌트만 Props를 변경할 수 있다.
- 컴포넌트의 내용을 다르게 여러번 사용하고 싶을 때 이용
- 코드를 간결하게 작성할 수 있으며 리팩토링할 때 수월해진다.

```JavaScript
import React, { Component } from 'react';

class Content extends Component{
  render(){
    return (
      <div>
          <h1>{this.props.title}</h1>
          {this.props.sub}
      </div>
    );
  }
}

export default Content;
```

```JavaScript
import React, { Component } from 'react';
import './App.css';
import Content from "./components/Content"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Content title="Hello" sub="React!"></Content>
        <Content title="Good" sub="React!"></Content>
      </div>
    );
  }
}

export default App;
```

## State

---

- props의 값에 따른 내부의 데이터로 컴포넌트 내부에서 선언
- 데이터를 동적으로 변경할 때 사용한다.
- Class형 컴포넌트에서만 사용할 수 있으며, 각각의 state는 독립적이다.
- 어떠한 컴포넌트가 실행될 때 constructor 함수가 있다면 render()보다 먼저 실행되어 초기화 된다.
- 외부에서 알 수 없도록 은닉할 수 있게함

```JavaScript
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      content:{title:'Hello', sub:'React!'}
    }
  }
  render() {
    return (
      <div className="App">
        <Content
          title={this.state.content.title}
          sub={this.state.content.sub}
          ></Content>
      </div>
    );
  }
}
```
