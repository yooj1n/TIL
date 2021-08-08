# 목차

# 01. 개발 환경 (Mac_Setting)

- ### Homevrew
  Iterm or Terminal에 입력

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

- ### Visual Studio Code

[홈페이지](https://code.visualstudio.com/)에서 다운로드

- ### Node.js (nvm)
  VSCode Terminal에 차례대로 입력

```
> brew install wget
> touch $HOME/ .zshrc
> wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
> source .zshrc
> nvm install --lts
> node -v
```

버전이 제대로 확인된다면 설치 완료

- ### 자바8 JDK
  VSCode Terminal에 차례대로 입력

```
> brew tap AdoptOpenJDK/openjdk
> brew install --cask adoptopenjdk8
```

.zshrc 파일을 연다.

```
code $HOME/ .zshrc
```

아래 코드를 마지막 줄에 삽입하고 저장

```
export JAVA_HOME=/Library/Java/JavaVirtualMachines/adoptopenjdk-8.jdk/Contents/Home
```

VSCode Terminal에 차례대로 입력하여 설치 확인

```
> source .zshrc
> echo $JAVA_HOME
> java -version
```

- ### Xcode

- ### cocoapods(코코아팟)
  VSCode Terminal에 차례대로 입력하여 설치하고 확인

```
> sudo gem install cocoapods
> pod --version
```

- ### watchman(워치맨)
  VSCode Terminal에 차례대로 입력하여 설치하고 확인

```
> brew install watchman
> watchman --version
```

- ### Android Studio(안드로이드 스튜디오)

  [홈페이지](https://developer.android.com/studio?gclid=CjwKCAjwgb6IBhAREiwAgMYKRu9-hfI_8Wh_otGib7oTJMcpSQQm5Y9QI8mlFpncLcVKWmAthMUqoRoCV38QAvD_BwE&gclsrc=aw.ds)에서 다운로드

.zshrc 파일을 연다.

```
code $HOME/ .zshrc
```

아래 코드를 마지막 줄에 삽입하고 저장

```
> export ANDROID_SDK_ROOT=$HOME/Library/Android/sdk
> export PATH=$PATH:$ANDROID_SDK_ROOT/emulator
> export PATH=$PATH:$ANDROID_SDK_ROOT/tools
> export PATH=$PATH:$ANDROID_SDK_ROOT/tools/bin
> export PATH=$PATH:$ANDROID_SDK_ROOT/platform-tools
```

VSCode Terminal로 돌아와서 내용 반영

```
source .zshrc
```

- ### TypeScript 컴파일러
  VSCode Terminal에 입력

```
npm i -g typescript ts-mode
```
