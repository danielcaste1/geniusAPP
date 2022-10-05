import React, {useContext, useEffect} from "react";
import FavoriteSongCard from "../Components/FavoriteSongCard";
import { FavoritesContext } from "../Contexts/FavoritesContext";

const Favorites = () => {
  const {favorites} = useContext(FavoritesContext);
  const {songs, artists} = favorites;
  return (
    <div className="flex flex-col items-center w-full py-10 bg-gradient-to-t from-slate-900 to-slate-800">
      <h1 className="text-3xl font-bold text-slate-50">Your likes</h1>
      <div className="w-full grid grid-cols-2">
        <div className="flex flex-col items-center justify-center mx-5">
          <span className="text-center text-xl font-bold text-slate-50">Songs</span>
          <div className="w-3/4 flex flex-col my-2">
            {songs.length ? songs.map(song => (
              <FavoriteSongCard key={song.id} song={song}/>
            )) : <h1>213</h1>}
          </div>
        </div>
        <div className="flex justify-center text-xl font-bold text-slate-50">
          <span>Artists</span>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Favorites;
