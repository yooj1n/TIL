import React, { useState } from 'react';
import {Image, StatusBar} from "react-native"
import * as Font from "expo-font";
import AppLoading from 'expo-app-loading';
import { Asset } from 'expo-asset';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
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
      "https://images.unsplash.com/photo-1572700432881-42c60fe8c869?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      require("./assets/splash.png")
    ]);
    const fonts = cacheheFonts([Ionicons.font, FontAwesome.font]);
    //loadAssets은 Promise를 return해야함.
    // Promise.all이 promise array를 가진다.
    return Promise.all([...images, ...fonts]);
  };
  const onFinish = () => setIsReady(true);
  return isReady ? (
    <>
      <NavigationContainer>
        <Stack />
      </NavigationContainer>
      <StatusBar barStyle="light-content" />
    </>
  ) : (
    <AppLoading
      startAsync={loadAssets}
      onFinish={onFinish}
      onError={console.error}
    />
  );
}