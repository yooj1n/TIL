import React, { useEffect, useRef } from "react";
import { Animated, View } from "react-native";
import styled from "styled-components";

const Wrapper = styled(Animated.createAnimatedComponent(View))`
align-items:center;
background-color: gray;
padding: 15px;
border-radius: 5px;
`;

const CoinName = styled.Text`
color: white;
`;

const Icon = styled.Image`
border-radius: 20px;
width: 40px;
height: 40px;
margin-bottom: 10px;
`;

const Coin = ({symbol, index}) => {
  const opacity = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.spring(opacity, {
      toValue:1,
      useNativeDriver:true,
      delay: index * 100,
    }).start();
  }, []);
  const scale = opacity.interpolate({
    inputRange: [0,1],
    outputRange: [0.7,1]
  });
  return (
    <Wrapper style={{flex: 0.31, opacity, transform:[{scale}]}}>
    <Icon source={{uri:`https://cryptoicon-api.vercel.app/api/icon/${symbol.toLowerCase()}`}}/>
    <CoinName>{symbol}</CoinName>
  </Wrapper>
  )
}

export default Coin;
