### setup (IOS)

- https://rnfirebase.io/ 참조
- npm install --save @react-native-firebase/app
- firebase project 들어가서 ios 클릭 - Apple 번들 ID 입력(아래 설명)
- VSC로 가서 ios 폴더 우측 클릭 - Reveal in Finder - ios 폴더 - .xcworkspace 클릭 - 해당 프로젝트 클릭 - general 탭의 bundle Identifier
- 등록이 완료되면 구성 파일 다운로드(info.plist)
- Xcode로 들어가서 해당프로젝트 우클릭 - Add to file "socialcoin" - 다운받은 구성 파일 선택 - copy items if needed, create groups, Add to targets 체크 표시
- VSC ios 폴더 - socialcoin 폴더 - AppDelegatd.m 파일 - #import <Firebase.h> 삽입 - didFinishLaunchingWithOptions 부분 찾아서 안에 [FIRApp configure]; 삽입
- npx pod-install
- npm start
- npm run ios

### Testing

- firebase Authentication 시작
- npm install @react-native-firebase/auth
- npx pod-install

### Screens

- npm install @react-navigation/native
- npm install react-native-screens react-native-safe-area-context
- npm install @react-navigation/native-stack
- npx pod-install
- npm i styled-components
- Login이 되어있을 때 보여지는 InNav(Home Screen)와 Login이 안 되어있을 때 보여지는 OutNav(Login, Join) 생성
- Join.js 에서 email을 입력하고 키보드의 next를 눌렀을 때 password input으로 넘어가게 하는방법 : onSubmitEditing, useRef, Ref 이용
