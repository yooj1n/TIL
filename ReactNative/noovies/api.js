import axios from "axios";

const TMDB_KEY = "0a5c0d8acd8423f2bb24153b5937e1c7"

const makeRequest = (path, params) => 
axios.get(`https://api.themoviedb.org/3${path}`, {
  params : {
    //object의 content를 get하는 것을 의미
    ...params,
    api_key : TMDB_KEY
  }
})

const getAnything = async (path, params = {}) => {
  try {
    const {
      data: { results },
      data
    } = await makeRequest(path, params);
    return [results || data, null];
  } catch (e) {
    console.log(e);
    return [null, e];
  }
};

export const movieApi = {
  //request를 하는 functions
  nowPlaying: () => getAnything("/movie/now_playing"),
  popular: () => getAnything("/movie/popular"),
  upcoming: () => getAnything("/movie/upcoming", { region: "kr" }),
  search: query => getAnything("/search/movie", { query }),
  movie: id => getAnything(`/movie/${id}`),
  discover: () => getAnything("/discover/movie")
}

export const tvApi = {
  today: () => getAnything("/tv/airing_today"),
  thisWeek: () => getAnything("/tv/on_the_air"),
  topRated: () => getAnything("/tv/top_rated"),
  popular: () => getAnything("/tv/popular"),
  search: query => getAnything("/search/tv", { query }),
  show: id => getAnything(`/tv/${id}`)
}

export const apiImage = path => path ? `https://image.tmdb.org/t/p/w500${path}` : "https://images.unsplash.com/photo-1572700432881-42c60fe8c869?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"