import React, { useRef, useState } from 'react';
import { Animated, Dimensions, Pressable } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
flex: 1;
justify-content: center;
align-items: center;
`

const Box = styled.View`
width: 200px;
height: 200px;
background-color: tomato;
`

const AnimatedBox = Animated.createAnimatedComponent(Box);

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get("window");

export default function App() {
  const POSITION = useRef(new Animated.ValueXY({x:-SCREEN_WIDTH / 2 + 100, y:-SCREEN_HEIGHT / 2 + 100})).current; //다시 렌더링될 때마다 초기값으로 돌아가지않게 Value값 기억
  const topLeft =  Animated.timing(POSITION,{
    toValue: {
      x:-SCREEN_WIDTH / 2 + 100,
      y:-SCREEN_HEIGHT / 2 + 100,
    },
    useNativeDriver: false,
  })
  const topRight = Animated.timing(POSITION,{
    toValue: {
      x:SCREEN_WIDTH / 2 - 100,
      y:-SCREEN_HEIGHT / 2 + 100,
    },
    useNativeDriver: false,
  })
  const bottomLeft = Animated.timing(POSITION,{
    toValue: {
      x:-SCREEN_WIDTH / 2 + 100,
      y:SCREEN_HEIGHT / 2 - 100,
    },
    useNativeDriver: false,
  })
  const bottomRight = Animated.timing(POSITION,{
    toValue: {
      x:SCREEN_WIDTH / 2 - 100,
      y:SCREEN_HEIGHT / 2 - 100,
    },
    useNativeDriver: false,
  })
  const moveUp = () => {
   Animated.loop(
    Animated.sequence([bottomLeft, bottomRight, topRight, topLeft])
   ).start();
  };
  const rotation = POSITION.y.interpolate({
    inputRange: [-250, 250],
    outputRange: ["-360deg", "360deg"],
  })
  const borderRadius = POSITION.y.interpolate({
    inputRange: [-250, 250],
    outputRange: [100, 0],
  })
  const bgColor = POSITION.y.interpolate({
    inputRange: [-250, 250],
    outputRange: ["rgb(255,99,71)", "rgb(71,166,255)"],
  })
  return (
    <Container>
      <Pressable onPress={moveUp}>
        <AnimatedBox
            style={{
              borderRadius,
              backgroundColor: bgColor,
              transform: [...POSITION.getTranslateTransform()],
            }}
        />
      </Pressable>
    </Container>
  ) 
}
