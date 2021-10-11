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
  const Y_POSITION = useRef(new Animated.Value(250)).current; //다시 렌더링될 때마다 초기값으로 돌아가지않게 Value값 기억
  const moveUp = () => {
    Animated.timing(Y_POSITION, {
      toValue: up ? 250 : -250,
      useNativeDriver: true,
      duration: 2500,
    }).start(toggleUp);
  };
  const opacity = Y_POSITION.interpolate({
    inputRange: [-250, 0, 250],
    outputRange: [1, 0, 1],
  })
  const borderRadius = Y_POSITION.interpolate({
    inputRange: [-250, 250],
    outputRange: [100, 0],
  })
  return (
    <Container>
      <Pressable onPress={moveUp}>
        <AnimatedBox
            style={{
              opacity,
              borderRadius,
              transform: [{ translateY: Y_POSITION}],
            }}
        />
      </Pressable>
    </Container>
  ) 
}
