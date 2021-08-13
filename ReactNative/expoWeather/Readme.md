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
