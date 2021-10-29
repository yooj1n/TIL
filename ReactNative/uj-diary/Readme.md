### setup

### Home Screen

- main colors 미리 지정
- Navigator.js를 만들고 Tab navigator import -> Tab screen 생성
- screens 폴더, 파일 생성(Tab screen)
- App.js\_ NavigatorContainer 안에 Navigator 삽입
- Home.js styling

### Write Screen

### realm SDK

- expo install expo-app-loading
- npx pod-install ios
- https://docs.mongodb.com/realm/sdk/react-native/ 참조
- App.js에 AppLoading과 realm 생성

### Writing Objects

- realm 커넥션을 context에 넣어줌
  context는 다른 많은 스크린들이나 component 등등에 값을 넣게해주는 방법(그냥 어떤것을 넣을 수 있는 박스라고 생각하면 됨)
  props를 사용해서 값을 전송하지 않고!
- Context 생성
- <DBContext.Provider>로 어플 모든걸 감싸기
  이렇게 하면 context에 무엇을 넣든지간에 context에 접근할 수 있음.
  context안에 들어가는 값은 realm 커넥션이기 때문에
- write screen에 useContext를 사용하여 realm 연걸하기 (매번 useContext를 반복하여 import하기 귀찮으니 새로운 hook을 하나 만든다\_useDB)
- write screen에 navigation:{goback} prop을 넘겨주어 save를 누르면 home screen으로 돌아가게 해준다.
