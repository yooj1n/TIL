import React, { useState } from 'react';
import {Image} from "react-native"
import * as Font from "expo-font";
import AppLoading from 'expo-app-loading';
import { Asset } from 'expo-asset';
import { Ionicons } from '@expo/vector-icons';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Stack from './navigation/Stack';

const cacheImages = images =>
  images.map(image => {
    if (typeof image === "string") {
      //이미지를 미리 fetch(가져오다) 하겠다
      return Image.prefetch(image);
    } else {
      //moduel에서 이미지를 downloadAsync 하는것
      return Asset.fromModule(image).downloadAsync();
    }
  }); 
  //cachefonts에 font를 주고 그 font를 load할거임.
  const cacheheFonts = fonts => fonts.map(font => Font.loadAsync(font))

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const loadAssets = () => {
    const images = cacheImages([
      "https://images.unsplash.com/photo-1584486188544-dc2e1417aff1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      require("./assets/splash.png")
    ]);
    const fonts = cacheheFonts([Ionicons.font]);
    //loadAssets은 Promise를 return해야함.
    // Promise.all이 promise array를 가진다.
    return Promise.all([...images, ...fonts]);
  };
  const onFinish = () => setIsReady(true);
  return isReady ? (
    <NavigationContainer>
      <Stack />
    </NavigationContainer>
  ) : (
    <AppLoading
      startAsync={loadAssets}
      onFinish={onFinish}
      onError={console.error}
    />
  );
}