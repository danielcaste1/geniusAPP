import React, { Fragment, useEffect, useReducer } from "react";
import {useParams } from "react-router-dom";
import { getArtist, getTopSongs } from "../API/getTopSongs";
import PageButton from "../Components/Buttons/PageButton.jsx";
import SongCard from "../Components/SongCard.jsx";
import { actionTypes, reducer } from "../Reducer/ReducerTopSongs";

const ArtistPage = () => {

  const {artistID} = useParams();

  const initialState = {
    name: undefined,
    picture: undefined,
    songs: undefined,
    nextPage: 1,
    prevPage: null,
    loading: true,
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const { name, picture, loading, songs, prevPage, nextPage } = state;

  const onLoading = () => {
    dispatch({
      type: actionTypes.LOADING,
      payload: {},
    });
  };
  const loadData = async (id, songsPage) => {
    onLoading();
    const artistAPI = await getArtist(id);
    const songsAPI = await getTopSongs(id, songsPage);
    const name = artistAPI.response.artist.name;
    const picture = artistAPI.response.artist.image_url;
    const songs = songsAPI.response.songs;
    const nextPage = songsAPI.response.next_page;
    const prevPage = nextPage - 2;
    dispatch({
      type: actionTypes.LOAD_DATA,
      payload: {
        name,
        picture,
        songs,
        nextPage,
        prevPage,
      },
    });
  };
  useEffect(() => {
    loadData(artistID, nextPage);
  },[]);

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-full flex items-center justify-center">
        <div className={`${!picture ? "animate-pulse" : "" } bg-slate-900 h-8 w-8 mr-5 rounded-full overflow-hidden`}>
          <img src={picture} alt="" />
        </div>
        <span className="text-3xl font-semibold text-slate-200 ">
          {name ? `${name} popular songs` : ""} 
        </span>
      </div>
      <div className="w-full">
        <div className="flex flex-col justify-center items-center min-h-full py-2 rounded-xl">
          <div className="grid grid-cols-3 gap-3 m-2 p-2">
            {!loading && songs ? (
              songs.map((song) => (
                <SongCard
                  key={song.id}
                  songID={song.id}
                  title={song.title}
                  artist={song.primary_artist.name}
                  picture={song.song_art_image_thumbnail_url}
                />
              ))
            ) : (
              <Fragment>
                <SongCard />
                <SongCard />
                <SongCard />
                <SongCard />
                <SongCard />
                <SongCard />
              </Fragment>
            )}
          </div>
          <div>
            <PageButton
              isDisabled={!prevPage}
              onClick={() => loadData(artistID,prevPage)}
              icon="Prev"
            />
            <PageButton
              isDisabled={!nextPage}
              onClick={() => loadData(artistID,nextPage)}
              icon="Next"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistPage;
