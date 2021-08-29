import React, { useState, useEffect } from "react";
import DetailPresenter from "./DetailPresenter";
import * as WebBrowser from 'expo-web-browser';
import { movieApi, tvApi } from "../../api";

export default ({
  navigation,
  route: {
    params: { isTv, id, title, backgroundImage, poster, votes, overview }
  }
}) => {
  const [detail, setDetail] = useState({
    loading: true,
    result: {
      title,
      backgroundImage,
      poster,
      overview,
      votes,
      //기본값을 설정 안 해주면 로딩이 안 됐을 때 에러가 남
      videos: {
        results: []
      }
    }
  });
  const getData = async () => {
    const [getDetail, getDetailError] = isTv
      ? await tvApi.show(id)
      : await movieApi.movie(id);
    setDetail({
      loading: false,
      result: {
        ...getDetail,
        title: getDetail.title || getDetail.name,
        backgroundImage: getDetail.backdrop_path,
        poster: getDetail.poster_path,
        overview: getDetail.overview,
        votes: getDetail.vote_average
      }
    });
  };

  useEffect(() => {
    getData();
  }, [id]);
  React.useLayoutEffect(() => {
    navigation.setOptions({ title });
  });

  const openBrowser = async url => {
    await WebBrowser.openBrowserAsync(url);
  };
  
  return <DetailPresenter openBrowser={openBrowser} {...detail} />;
};