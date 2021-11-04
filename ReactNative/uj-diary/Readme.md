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

### Reading Objects

- realm.objects를 이용하여 write 했던 array를 받아오기.
- FlatList를 이용하여 화면에 나타내기

### AdMob (IOS)

- 앱에 광고를 보여주는 방법
- expo install expo-ads-admob
- npx pod-install (only for Ios)
- Ios 폴더 - ujdiary 폴더 - info.plist 안에 아래 코드 붙여넣기
- adMob에 가입하면 app id를 줄거임. 이거는 그냥 demo 버젼
- 사용방법은 https://docs.expo.dev/versions/latest/sdk/admob/ 참조

```javascript
<key>GADApplicationIdentifier</key>
<string>ca-app-pub-3940256099942544~1458002511</string>
<key>NSUserTrackingUsageDescription</key>
<string>This identifier will be used to deliver personalized ads to you.</string>
```

https://developers.google.com/admob/ios/ios14#skadnetwork 안에 코드도 붙여넣어야함

## 페이지 정리

### App.js

- ready는 준비가 됐는지 아닌지를 확인하기 위함. 만약 준비가 되어있지 않았다면 AppLoading Component를 loading하고, 앱을 실행하기 전에 splash screen을 보여줄 것이다.
- AppLoading이 mount될 때 startLoading function을 시작
- startLoading은 realm과 연결해줌. ujDiaryDB 경로를 통해 database를 열고 object 등록을 시작(feelingSchema)
- database와 연결할 때 App component의 state와 연결
- ready가 true가 되고 return을 받는다
- DBContext는 react API일뿐

### Home.js

- useDB는 DBContext에 접근하기 위해 사용된 hook
- useEffect는 component가 mounte될 때 데이터베이스에서 모든 feelings를 찾게 됨
- addeventlistener를 통해서 feelings에 어떤 change가 일어나든 알 수 있음.

### Write.js

- useDB를 사용하여 realm에 접근가능
- 키보드의 done이나 save 버튼을 눌렀을 때 realm.write를 호출한다.
- goBack function은 navigation prop에 의해 주어진 것
