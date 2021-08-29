import React from "react";
import { Dimensions, PanResponder } from "react-native";
import styled from "styled-components/native";
import { apiImage } from "../../api";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const Container = styled.View`
  flex: 1;
  background-color: black;
  align-items: center;
`;

const Card = styled.View`
  top: 80px;
  height: ${HEIGHT / 1.5}px;
  width: 90%;
  position: absolute;
`;

const Poster = styled.Image`
  border-radius: 20px;
  width: 100%;
  height: 100%;
`;

export default ({ results }) => {
  //panresponse는 사용자가 화면을 누르거나 드래그 하는 등의 제스처를 인식할 수 있게 해줌
  const panResponder = PanResponder.create({
    /*Ask to be the responder하고
    reference 참조하여 원하는 걸 사용해서 커스터마이징하면 
    panresponder는 커스터마이징한 함수의 객체가 됨*/
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, {dx}) => {
      console.log(dx);
    }
  });
  console.log(panResponder);
  return (
    <Container>
      {results.reverse().map(result => (
        <Card key={result.id} {...PanResponder.panHandlers}>
          <Poster source={{ uri: apiImage(result.poster_path) }} />
        </Card>
      ))}
    </Container>
  );
};