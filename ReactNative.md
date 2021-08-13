# 목차

# 01. 개발 환경 (Mac M1_Setting)

- ### iTerm 설치 및 Rosetta 설정

  - [iTerm 설치](https://iterm2.com/downloads.html)를 설치한다
  - 응용프로그램에서 iTerm을 복제한다
  - 복제한 iTerm [정보 가져오기] 클릭 > [Rosseta]를 사용하여 열기

- ### Homebrew 설치

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

- ### node 설치

```
> brew install node
> node -v
> npm -v
```

- ### watchman

```
> brew install watchman
> watchman --version
```

- ### Cocoapod 설치(iTerm Rosetta 터미널 이용)

```
> sudo gem install cocoapods
> sudo gem install ffi
```

- ### Xcode 설치 및 설정

  - Mac 앱스토어에서 다운로드

- ### Expo 가입 및 설치
  - Expo 사이트에 접속하여 가입을 하고 설치한다
  ```
  npm install -g expo-cli
  ```
  - 핸드폰에도 Expo 어플 다운로드

# 02. Expo_Project 생성하기

프로젝트를 수행 할 폴더를 생성하고, 터미널에서 그 폴더의 위치로 이동한다.

```
exp init (project name)
```
blank 등등 선택할 사항이 있다. 
실행 할 파일을 visual studio code에서 연다.
visual studio code 터미널을 연다.
```
npm start
```