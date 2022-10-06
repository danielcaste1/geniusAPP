import React, {useContext, useEffect} from "react";
import FavoriteSongCard from "../Components/FavoriteSongCard";
import FavoriteArtistCard from "../Components/FavoriteArtistCard.jsx";
import EmptyFavorites from "../Containers/EmptyFavorites";
import { FavoritesContext } from "../Contexts/FavoritesContext";

const Favorites = () => {
  const {favorites} = useContext(FavoritesContext);
  const {songs, artists} = favorites;
  return (
    <div className="flex flex-col justify-start items-center w-full py-10 bg-gradient-to-t from-slate-900 to-slate-800">
      <h1 className="my-3 text-3xl font-bold text-slate-50">Your likes</h1>
      <div className="mt-5 w-full grid grid-cols-2">
        <div className="flex flex-col items-center justify-center mx-5">
          <span className="text-center text-xl font-bold text-slate-50">Songs</span>
          <div className="w-3/4 flex flex-col my-2">
            {songs.length ? songs.map(song => (
              <FavoriteSongCard key={song.id} song={song}/>
            )) : <EmptyFavorites category="songs" />}
          </div>
        </div>
        <div className="flex flex-col items-center justify-start mx-5">
        <span className="text-center text-xl font-bold text-slate-50">Artists</span>
          <div className="w-3/4 flex flex-col my-2">
            {artists.length ? artists.map(artist => (
              <FavoriteArtistCard key={artist.id} artist={artist}/>
            )) : <EmptyFavorites category="artists" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorites;
