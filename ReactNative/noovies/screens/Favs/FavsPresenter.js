import React, { useState, useEffect } from "react";
import { Animated, Dimensions, PanResponder } from "react-native";
import styled from "styled-components/native";
import { apiImage } from "../../api";
import {LogBox} from "react-native";

LogBox.ignoreLogs([
  'Animated: `useNativeDriver` was not specified.',
]);

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const Container = styled.View`
  flex: 1;
  background-color: black;
  align-items: center;
`;

const styles = {
  top: 50,
  height: HEIGHT / 1.5,
  width: "90%",
  position: "absolute"
};

const Poster = styled.Image`
  border-radius: 20px;
  width: 100%;
  height: 100%;
`;

export default ({ results }) => {
  //뭐가 위에 있는지 계속 알고싶어서 usestate를 씀
  const [topIndex, setTopIndex] = useState(0);
  const nextCard = () => setTopIndex(currentValue => currentValue + 1);
  const position = new Animated.ValueXY();
  //panresponse는 사용자가 화면을 누르거나 드래그 하는 등의 제스처를 인식할 수 있게 해줌
  const panResponder = PanResponder.create({
    /*Ask to be the responder하고
    reference 참조하여 원하는 걸 사용해서 커스터마이징하면 
    panresponder는 커스터마이징한 함수의 객체가 됨*/
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, {dx, dy}) => {
      position.setValue({x:dx, y:dy})
    },
    onPanResponderRelease: (evt, { dx, dy }) => {
      if (dx >= 250) {
        Animated.spring(position, {
          toValue: {
            x: WIDTH + 100,
            y: dy
          }
        }).start(nextCard);
      } else if (dx <= -250) {
        Animated.spring(position, {
          toValue: {
            x: -WIDTH - 100,
            y: dy
          }
        }).start(nextCard);
      } else {
        Animated.spring(position, {
          toValue: {
            x: 0,
            y: 0
          }
        }).start();
      }
    }
  });
  const rotationValues = position.x.interpolate({
    inputRange:[-255,0,255],
    outputRange:["-5deg","0deg","5deg"],
    extrapolate:"clamp"
  });
  const secondCardOpacity = position.x.interpolate({
    inputRange:[-255,0,255],
    outputRange:[1,0.2,1],
    extrapolate:"clamp"
  });
  const secondCardScale = position.x.interpolate({
    inputRange:[-255,0,255],
    outputRange:[1,0.8,1],
    extrapolate:"clamp"
  });
  useEffect(() => {
    position.setValue({ x: 0, y: 0 });
  }, [topIndex]);
  return (
    <Container>
      {results.reverse().map((result, index) => {
        if (index < topIndex) {
          return null;
        } else if (index === topIndex) {
          return (
            <Animated.View
              style={{
                ...styles,
                zIndex: 1,
                transform: [
                  { rotate: rotationValues },
                  ...position.getTranslateTransform()
                ]
              }}
              key={result.id}
              {...panResponder.panHandlers}
            >
              <Poster source={{ uri: apiImage(result.poster_path) }} />
            </Animated.View>
          );
        } else if (index === topIndex + 1) {
          return (
            <Animated.View
              style={{
                ...styles,
                zIndex: -index,
                opacity: secondCardOpacity,
                transform: [{ scale: secondCardScale }]
              }}
              key={result.id}
              {...panResponder.panHandlers}
            >
              <Poster source={{ uri: apiImage(result.poster_path) }} />
            </Animated.View>
          );
        } else {
          return (
            <Animated.View
              style={{
                ...styles,
                zIndex: -index,
                opacity: 0
              }}
              key={result.id}
              {...panResponder.panHandlers}
            >
              <Poster source={{ uri: apiImage(result.poster_path) }} />
            </Animated.View>
          );
        }
      })}
    </Container>
  );
};