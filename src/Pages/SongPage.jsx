import React, { useReducer, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getSong } from "../API/getTopSongs";
import { reducer, actionTypes } from "../Reducer/ReducerSong";
import {SiApple, SiGenius} from "react-icons/si"; 
import PlayerButton from "../Components/Buttons/PlayerButton";

const SongPage = () => {
  const { songID } = useParams();

  const initialState = {
    loading: true,
    name: undefined,
    picture: undefined,
    album: undefined,
    artist: undefined,
    artistID: undefined,
    geniusURL: undefined,
    appleURL: undefined,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const { loading, name, picture, album, artistID, artist, geniusURL, appleURL } = state;

  const loadData = async () => {
    const data = await getSong(songID);
    const song = data.response.song;
    console.log(song)
;    dispatch({
      type: actionTypes.LOAD_DATA,
      payload: {
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

  useEffect(() => {
    loadData();
  }, []);
  return (
    <div className="w-full flex flex-col items-center justify-center text-slate-50 bg-gradient-to-t from-slate-900 to-slate-800">
      <div className="flex flex-col w-80">
        <span className={`${!album ? "w-full h-5 bg-slate-500 rounded-lg animate-pulse" : ""} my-3 mx-auto text-sm text-slate-50/80`}>{album}</span>
        <div className={`${loading ? "animate-pulse" : ""}  w-full h-80  bg-slate-700`}>
          <img className="w-full" src={picture} alt="" />
        </div>
        <div className="flex flex-col my-3">
          <span className={`${!name ? "w-full my-1 h-5 bg-slate-500 rounded-lg animate-pulse" : ""}text-xl font-semibold`}>{name}</span>
          <Link className={`${!artistID ? "w-full my-1 h-5 bg-slate-500 rounded-lg animate-pulse": ""} text-sm text-slate-50/50 hover:underline`} to={`../../artist/${artistID}`} relative="path">{artist}</Link>
        </div>
        <PlayerButton
          Icon={SiGenius}
          url={geniusURL}  
          text="View Lyrics"
        />
        <PlayerButton
          Icon={SiApple}
          url={appleURL}  
          text="Listen now"
        />
      </div>
    </div>
  );
};

export default SongPage;
