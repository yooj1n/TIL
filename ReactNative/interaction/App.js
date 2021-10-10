import React from 'react';
import { Animated, TouchableOpacity } from 'react-native';
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
  const Y = new Animated.Value(0);
  const moveUp = () => {
    Animated.spring(Y, {
      toValue: -200,
      bounciness: 30,
      useNativeDriver: true,
    }).start();
  };
  return (
    <Container>
      <TouchableOpacity onPress={moveUp}>
        <AnimatedBox
            style={{
              transform: [{ translateY: Y }],
            }}
        />
      </TouchableOpacity>
    </Container>
  ) 
}
