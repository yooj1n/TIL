# Loading page 생성 후 App.js에 import

App.js

```javascript
import React from "react";

export default function App() {
  return <Loading />;
}
```

Loading.js

```javascript
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Loading() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Getting the awesome weather</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 30,
    paddingVertical: 100,
    backgroundColor: "#FDF6AA",
  },
  text: {
    color: "#2c2c2c",
    fontSize: 30,
  },
});
```

# Getting the Location

Expo Geolocation 관련해서 API를 써야한다면 아래 코드를 입력하여 설치하고 App.js에 import 해준다

```
expo install expo-location
```

```
import * as Location from 'expo-location';
```

componentDidmount()를 써서 위치를 가져와야 하는데
Location.getCurrentPositionAsync(options)은 await, permission function이라서 아래와 같이 코드를 입력해준다.
permission funcition은 사용자한테 수락 요청을 받아야한다.

```JavaScript
 getLocation = async() => {
   try {
     await Location.requestPermissionAsync(); //사용자에게 수락요청을 하고,
     const locatin = await Location.getCurrentPositionAsync(); // 위치를 받아온다.
     console.log(location);
   } catch (error) { // 사용자가 거절하면 alert 창을 띄운다, *Alert기능 import 해줘야함!
     Alert.alert("can't find you", "so sad");
   }
 };
componentDidMount(){
  this.getLocation();
}
```

expo로 연결 된 기기의 console을 확인해보면 아래와 같은 내용을 확인할 수 있다. location Object 안에 coords Object가 있는 것이다.

```javascript
Object {
  "coords" : Object {
    "accuracy" : 5,
    .
    .
    .
  }
}
```

coords Object를 직접 가져와 아래와 같이 코드를 수정할 수 있다. API로 전송해서 날씨를 가져올 수 있게 할 것이다.

```JavaScript
     const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
```

간단한 state들을 추가하여 잘 작동하는지 확인한다.

```JavaScript
import React from "react";
import { Alert } from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";

export default class extends React.Component {
  state = {
    isLoading: true
  };
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude }
      } = await Location.getCurrentPositionAsync();
      this.setState({ isLoading: false });
    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading } = this.state;
    return isLoading ? <Loading /> : null;
  }
}
```

# Getting the Weather

- 데이터를 가져오기 위해 사용할 API는 [이링크](https://openweathermap.org/)에서 가져올 것이다.
- 로그인이 필요하다.
- 로그인을 하면 나의 API Key를 갖게된다.
- 이 Key를 app.js에서 const로 설정해준다.

```javascript
const API_KEY = "9642d4022516bc617fd932b756e4fe6e";
```

- [Currnet weather data API doc](https://openweathermap.org/current)으로 가면 데이터를 가져오는 많은 방법들이 있다.
- 현재는 By geographic coordinates 방법을 사용할 것이다.
- 다음과 같은 url을 이용하여 나의 날씨 정보를 받을 수 있다.
  api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

- 이전에 console에서 coords Object에서 확인했었던 latitude, longitude를 입력해주고 나의 API key도 입력해주면 된다
- 이 데이터들을 fetch 하기 위해서 Axios를 설치해줘야 한다.(VS Code 터미널 이용)

```
npm install axios
```

```
import axios from "axios";
```

날씨를 가져오는 getWeather 함수를 정의하고 getLocation 함수 안에 getWeather 함수를 추가한다.

```javascript
import { Alert } from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";
import axios from "axios";

const API_KEY = "241051bf13976dd3ddf8b8d9f247255e";

export default class extends React.Component {
  state = {
    isLoading: true
  };
  getWeather = async (latitude, longitude) => {
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}`
    );
    console.log(data);
  };
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude }
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
      this.setState({ isLoading: false });
    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
```

# Displaying Tmeperature

- current weather data - Units format을 보면 2가지 옵션이 있다. 섭씨(Celsius)를 사용할 것이다.&units=metric 추가

```javascript
`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
```

- Expo Device를 선택- Features 탭 - Location 탭 - Custom Location 에서 나의 latitude와,longitude로 바꾸기
- Weather.js를 생성한다.
- 몇 가지 props를 가지기 때문에 prop types 설치한다.

```
npm install prop-types
```

Weather.js

```javascript
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";

export default function Weather({ temp }) {
  return (
    <View style={styles.container}>
      <Text>{temp}</Text>
    </View>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
```

App.js

- null 대신에 Weather을 가져온다.

```javascript
const { isLoading, temp } = this.state;
return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} />; //기온을 정수로만 표현
```

- getWeather 함수 내부에서 console행 지우고 setState행 삽입

```javascript
console.log(data); //삭제
this.setState({ isLoading: false, temp: data.main.temp }); //삽입
```

getLocation 함수 내부에서 setState 행 삭제

```javascript
this.setState({ isLoading: false }); //삭제
```

# Getting the Condition Names

Weather.js propType에 날씨들 추가

```javascript
temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
    "Dust"
  ]).isRequired
```

```javascript
getWeather = async (latitude, longitude) => {
  const {
    data: {
      main: { temp },
      weather,
    },
  } = await axios.get(
    `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
  );
  this.setState({
    isLoading: false,
    condition: weather[0].main,
    temp,
  });
};
```

```javascript
render() {
    const { isLoading, temp, condition } = this.state;
    return isLoading ? (
      <Loading />
    ) : (
      <Weather temp={Math.round(temp)} condition={condition} />
    );
  }
```

# Icons and Styling

Expo는 expo/vector-icons라는걸 이미 가지고있기 때문에 Weather.js에 import만 해주면 된다.

```javascript
import { MaterialCommunityIcons } from "@expo/vector-icons";
//만약 다른 아이콘 family를 원한다면 {} 안을 수정해주면 된다.
```

아래와 같이 아이콘을 스타일링 하면 되고, View를 두개로 나눠서 영역을 반반으로 나눠 배치할 것이다.

```javascript
export default function Weather({ temp }) {
  return (
    <View style={styles.container}>
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons size={96} name="weather-lightning-rainy" />
        <Text style={styles.temp}>{temp}o</Text>
      </View>
      <View style={styles.halfContainer} />
    </View>
  );
}
```

styleSheet에 아래와 같이 추가

```javascript
  temp: {
    fontSize: 42
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
```

# Background Gradient

```
expo install expo-linear-gradient
```

```javascript
import { LinearGradient } from "expo-linear-gradient";
```

핸드폰 위의 기본적인 bar 색상을 수정하기 위해서는 StatusBar를 Loading.js와 Weather.js에 import 해줘야한다.

```javascript
import { StyleSheet, Text, View, StatusBar } from "react-native";
```

아래와 같이 Gradient를 설정해준다.

- [Gradients](https://uigradients.com/#Transfile) 조합 추천링크

```javascript
const weatherOptions = {
  Haze: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"]
  },
  Thunderstorm: {
    iconName: "",
    gradient: []
  },
  Drizzle: {
    iconName: "",
    gradient: []
  },
  .
  .
  .
export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          size={96}
          name={weatherOptions[condition].iconName}
          color="white"
        />
        <Text style={styles.temp}>{temp}°</Text>
      </View>
      <View style={styles.halfContainer} />
    </LinearGradient>
  );
}
```

# Titles and Subtitles

- 날씨에 맞는 title과 subtitle을 추가한다.
- styling 한다.
