# HTML

Hypertext Markup Language
표준화된 마크업 언어

## 기본구조

```html
<!DOCTYPE html>
<html>
//사용자에게 보여지는 UI적인 요소가 전혀 없습니다.css파일과 연결하는 곳입니다.
//사용자에게 보여지는 정보x, 메타데이터만 있습니다.
  <head>
    <meta charset="utf-8"> //utf-8 모든 언어 지원
    <meta name="viewport" content="width=device-width">
    //브라우저 검색하거나 북마크 추가할 때 보여지는 타이틀
    <title>JS Bin</title>
  </head>

//사용자에게 보여지는 정보입니다.
  <body>
<h1></h1>//heading 나타내고, h1~h6까지 있습니다.
<h1></h2>
<button></button>
  </body>
</html>

```

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

### MDN

[MDN HTML elements reference](https://developer.mozilla.org/en-US/docs/Web/HTML).
