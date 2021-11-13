import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useRef } from "react";
import { Animated, TouchableOpacity, View } from "react-native";
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

export const Icon = styled.Image`
border-radius: 20px;
width: 40px;
height: 40px;
margin-bottom: 10px;
`;

const Coin = ({symbol, index, id}) => {
  //navigation은 스크린의 속성으로만 쓸 수 있기때문에 hoook을 써준다.
  const navigation = useNavigation();
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
    <TouchableOpacity 
    style={{flex:0.31}}
    onPress={() => navigation.navigate("Detail", {symbol, id})}>
      <Wrapper style={{opacity, transform:[{scale}]}}>
        <Icon source={{uri:`https://cryptoicon-api.vercel.app/api/icon/${symbol.toLowerCase()}`}}/>
        <CoinName>{symbol}</CoinName>
      </Wrapper>
  </TouchableOpacity>
  )
}

export default Coin;
