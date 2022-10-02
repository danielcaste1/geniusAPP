import React, { useReducer } from "react";
import SearchInput from "../Components/Inputs/SearchInput.jsx";
import Title from "../Components/Title.jsx";
import SearchResults from "../Containers/SearchResults.jsx";
import { reducer, actionTypes } from "../Reducer/ReducerSearch.js";
import { getQuerySongs } from "../API/getTopSongs.js";

const Search = () => {
  const initialState = {
    loading: false,
    queryMade: false,
    queryValue: "",
    resultSongs: [],
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const {loading, queryValue, resultSongs, queryMade } = state;

  const onTyping = (newValue) => {
    dispatch({
      type: actionTypes.TYPING,
      payload: {
        queryValue: newValue,
      },
    });
  };
  const onLoading = () => {
    dispatch({
      type: actionTypes.LOADING,
      payload: {},
    });
  };

  const onSearch = async () => {
    onLoading();
    const data = await getQuerySongs(queryValue);
    const resultSongs = data.response.hits;
    dispatch({
      type: actionTypes.RESULT,
      payload: {
        resultSongs: resultSongs,
      },
    });
  };

  return (
    <div className="flex flex-col items-center w-full py-10">
      <Title title={"Search..."} />
      <SearchInput
        onSearch={onSearch}
        queryValue={queryValue}
        onTyping={onTyping}
      />
      <SearchResults loading={loading} resultSongs={resultSongs} queryMade={queryMade} />
    </div>
  );
};

export default Search;
