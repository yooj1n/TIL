import React, { useState } from "react";
import { movieApi, tvApi } from "../../api";
import SearchPresenter from "./SearchPresenter";

export default () => {
const [keyword, setKeyword] = useState("");
const [results, setResults] = useState({
  movies:[],
  shows:[],
  moviesError:null,
  showsError:null
});
const onChange = text => setKeyword(text);
const search = async () => {
  if (keyword === "") {
    return;
  }
  const [movies, moviesError] = await movieApi.search(keyword);
  const [shows, showsError] = await tvApi.search(keyword);
  setResults({
    movies,
    shows,
    moviesError,
    showsError
  });
};
return (<SearchPresenter
{...results}
onChange={onChange}
onSubmit={search}
keyword={keyword} 
/>
);
};