import React, { useEffect, useReducer } from "react";
import TopSongs from "../Containers/TopSongs.jsx";
import { getTopSongs } from "../API/getTopSongs";
import { actionTypes, reducer } from "../Reducer/ReducerTopSongs";

const Home = () => {
  const initialState = {
    loading: true,
    topSongs: undefined,
    nextPage: 1,
    prevPage: null
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  
  const {loading, topSongs, prevPage, nextPage} = state;

  const onLoading = ()=>{
    dispatch({
      type: actionTypes.LOADING,
      payload: {}
    });
  }

  const loadTopSongs = (songsPage)=>{
    onLoading();
    getTopSongs(songsPage)
			.then(data => {
        const songs = data.response.songs;
        const nextPage = data.response.next_page;
        const prevPage = nextPage - 2;
        dispatch({
          type: actionTypes.LOAD_TOP_SONGS,
          payload: {
            songs,
            nextPage,
            prevPage,
          }
        });
      });
  }
  useEffect(() => {
    loadTopSongs(nextPage);
  }, []);
  return (
    <div className='home w-full'>
      <TopSongs 
        loading={loading}
        songs={topSongs}
        prevPage={prevPage}
        nextPage={nextPage}
        loadTopSongs={loadTopSongs}
      />
    </div>
  );
}

export default Home;
