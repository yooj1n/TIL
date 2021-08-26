import React from "react";
import styled from "styled-components/native";
import HorizontalSlider from "../../components/HorizontalSlider";
import ScrollContainer from "../../components/ScrollContainer";
import Input from "../../components/Search/Input";
import Vertical from "../../components/Vertical";

const Container = styled.ScrollView`
background-color:black;
`;

const Text = styled.Text`
color:white;
`;

export default ({movies, shows, keyword, onChange, onSubmit}) => (
<ScrollContainer 
refreshFn={onSubmit}
loading={false}
contentContainerStyle={{paddingTop:10}}>
  <Input 
  placeholder={"Write a Keyword"}
  value={keyword}
  onChange={onChange}
  onSubmit={onSubmit}
  />
  {movies.length !== 0 &&  (
    <HorizontalSlider title={"Movie Results"}>
    {movies.map(movie => (
      <Vertical 
        id={movie.id}
        key={movie.id}
        poster={movie.poster_path}
        title={movie.title}
        votes={movie.vote_average}
      />
    ))}
  </HorizontalSlider>
  )}
  {shows.length !== 0 && (
    <HorizontalSlider title={"TV Results"}>
    {shows.map(show => (
      <Vertical 
        id={show.id}
        key={show.id}
        poster={show.poster_path}
        title={show.name}
        votes={show.vote_average}
      />
    ))}
  </HorizontalSlider>
  )}
</ScrollContainer>
);