import React, { useReducer, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getSong } from "../API/getTopSongs";
import { reducer, actionTypes } from "../Reducer/ReducerSong";
import { SiApple, SiGenius } from "react-icons/si";
import PlayerButton from "../Components/Buttons/PlayerButton";
import { FavoritesContext } from "../Contexts/FavoritesContext";
import LikeButton from "../Components/Buttons/LikeButton";

const SongPage = () => {
  const { songID } = useParams();

  const initialState = {
    id: undefined,
    name: undefined,
    picture: undefined,
    album: undefined,
    artist: undefined,
    artistID: undefined,
    geniusURL: undefined,
    appleURL: undefined,
  };

  const { isFavorite, addSong, removeSong } = useContext(FavoritesContext);

  const [state, dispatch] = useReducer(reducer, initialState);

  const {
    id,
    name,
    picture,
    album,
    artistID,
    artist,
    geniusURL,
    appleURL,
  } = state;

  const song = { ...state };

  const onLoadData = (song) => {
    dispatch({
      type: actionTypes.LOAD_DATA,
      payload: {
        id: song.id,
        name: song.title,
        picture: song.song_art_image_url,
        album: song.album?.name ? song.album.name : "...",
        artistID: song.primary_artist.id,
        artist: song.primary_artist.name,
        geniusURL: song.url,
        appleURL: song.apple_music_player_url,
      },
    });
  };

  const loadData = async () => {
    const data = await getSong(songID);
    const song = data.response.song;
    onLoadData(song);
  };

  useEffect(() => {
    loadData();
  }, []);
  return (
    <div className="w-full flex flex-col items-center justify-center text-slate-50 bg-gradient-to-t from-slate-900 to-slate-800">
      <div className="flex flex-col w-80">
        <span
          className={`${
            !album ? "w-full h-5 bg-slate-500 rounded-lg animate-pulse" : ""
          } my-3 mx-auto text-sm text-slate-50/80`}
        >
          {album}
        </span>
        <div
          className={`${
            !album ? "animate-pulse" : ""
          }  w-full h-80  bg-slate-700`}
        >
          <img className="w-full" src={picture} alt="" />
        </div>
        <div className="flex w-full min-h-32">
          <div className="flex w-full flex-col justify-center my-3">
            <span
              className={`${
                !name
                  ? "w-full my-1 h-5 bg-slate-500 rounded-lg animate-pulse"
                  : ""
              }text-xl font-semibold`}
            >
              {name}
            </span>
            <Link
              className={`${
                !artistID
                  ? "w-full my-1 h-5 bg-slate-500 rounded-lg animate-pulse"
                  : ""
              } text-sm text-slate-50/50 hover:underline`}
              to={`../../artist/${artistID}`}
              relative="path"
            >
              {artist}
            </Link>
          </div>
          {id ? <LikeButton addItem={addSong} removeItem={removeSong} favorite={song} isFavorite={isFavorite("song",song)} /> : null}
        </div>
        <div>
          <PlayerButton Icon={SiGenius} url={geniusURL} text="View Lyrics" />
          <PlayerButton Icon={SiApple} url={appleURL} text="Listen now" />
        </div>
      </div>
    </div>
  );
};

export default SongPage;
