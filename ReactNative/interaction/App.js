import React, { useRef } from 'react';
import { Animated, PanResponder } from 'react-native';
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
  const POSITION = useRef(
    new Animated.ValueXY({
      x:0, 
      y:0
    })
  ).current; //다시 렌더링될 때마다 초기값으로 돌아가지않게 Value값 기억
  const borderRadius = POSITION.y.interpolate({
    inputRange: [-250, 250],
    outputRange: [100, 0],
  })
  const bgColor = POSITION.y.interpolate({
    inputRange: [-250, 250],
    outputRange: ["rgb(255,99,71)", "rgb(71,166,255)"],
  })
  const panResponder = useRef(PanResponder.create({
    onStartShouldSetPanResponder: () => true, //view에서 touch를 감지할 지 결정할 수 있도록함
    onPanResponderGrant: () => { //터치가 시작될 때
      POSITION.setOffset({
        x: POSITION.x._value, //숫자 형태로 받아오려면 뒤에 _value를 붙여줘야함
        y: POSITION.y._value,
      })
    },
    onPanResponderMove: (_, {dx, dy}) => { //터치가 움직일때
      POSITION.setValue({
        x:dx,
        y:dy,
      })
    },
    onPanResponderRelease: () => { //터치가 끝났을때
      POSITION.flattenOffset(); //offset 값을 clear 해줌
    }
  })).current;
  return (
    <Container>
        <AnimatedBox
          {...panResponder.panHandlers}
            style={{
              borderRadius,
              backgroundColor: bgColor,
              transform: POSITION.getTranslateTransform(),
            }}
        />
    </Container>
  ) 
}
