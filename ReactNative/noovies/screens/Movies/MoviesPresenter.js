import React from "react";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import { ActivityIndicator, Dimensions, ScrollView, View } from "react-native";
import Slide from "../../components/Movies/Slide";
import Title from "../../components/Title";
import Vertical from "../../components/Vertical";
import Horizontal from "../../components/Horizontal";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const SlideContainer = styled.View`
  width: 100%;
  height: ${HEIGHT / 4}px;
  margin-bottom: 40px;
`
const Container = styled.View``;

const UpcomingContainer = styled.View`
  margin-top: 20px;
`;


export default ({ loading, nowPlaying, popular, upcoming }) => (
  //많은 것들을 갖게 되니까 스크롤이 되어야함. 핸드폰에서는 필수로 설정해줘야함
  <ScrollView style={{
    backgroundColor: "black"}}
    contentContainerStyle={{
      flex: loading ? 1 : "auto",
      //RN의 기본적인 flex direction은 column
      justifyContent: loading ? "center" : "flex-start"
    }}
    >
    {loading ? (
      <ActivityIndicator color="white" size="small" />
    ) : (
      <>
      <SlideContainer>
        <Swiper controlsEnabled={false} loop timeout={3}>
          {nowPlaying.map(movie => (
          <Slide
          key={movie.id}
          id={movie.id}
          title={movie.title}
          overview={movie.overview}
          votes={movie.vote_average}
          backgroundImage={movie.backdrop_path}
          poster={movie.poster_path}
        />
          ))}
        </Swiper>
      </SlideContainer>
      <Container>
      <Title title={"POPULAR MOVIES"}/>
      <ScrollView 
      horizontal showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingLeft:20}}
      style={{marginTop:20, marginBottom:40}}
      >
            {popular.map(movie => (
              <Vertical
                id={movie.id}
                key={movie.id}
                poster={movie.poster_path}
                title={movie.title}
                votes={movie.vote_average}
              />
            ))}
          </ScrollView>
          <Title title={"COMING SOON"}></Title>
          <UpcomingContainer>
            {upcoming.map(movie => (
              <Horizontal
                key={movie.id}
                id={movie.id}
                title={movie.title}
                releaseDate={movie.release_date}
                poster={movie.poster_path}
                overview={movie.overview}
              />
            ))}
          </UpcomingContainer>
      </Container>
      </>
    )}
  </ScrollView>
);