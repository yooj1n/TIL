import React, { useRef, useState } from 'react';
import { Animated, Easing, Pressable, TouchableOpacity } from 'react-native';
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

export default function App() {
  const [up,SetUp] = useState(false);
  const toggleUp = () => SetUp((prev) => !prev); 
  const POSITION = useRef(new Animated.ValueXY({x:0, y:250})).current; //다시 렌더링될 때마다 초기값으로 돌아가지않게 Value값 기억
  const moveUp = () => {
    Animated.timing(POSITION, {
      toValue: up ? 250 : -250,
      useNativeDriver: false,
      duration: 2500,
    }).start(toggleUp);
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
              transform: [{rotateY: rotation}, { translateY: POSITION.y}],
            }}
        />
      </Pressable>
    </Container>
  ) 
}
