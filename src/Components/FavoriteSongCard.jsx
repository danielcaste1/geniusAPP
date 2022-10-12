import React, { useContext } from "react";
import { FavoritesContext } from "../Contexts/FavoritesContext";
import { Link } from "react-router-dom";
import LikeButton from "./Buttons/LikeButton";
const FavoriteSongCard = ({ song }) => {
  const { isFavorite, addSong, removeSong } = useContext(FavoritesContext);
  const { id, name, picture, artist, artistID } = song;
  return (
    <div className="flex w-full items-center my-2 mx-3  bg-slate-900/50 hover:bg-slate-900/100 rounded-md shadow-md shadow-slate-900/50">
      <div className={`${!id ? "animate-pulse" : ""} w-32 h-32 bg-slate-700`}>
        <img className="w-full h-full" src={picture} alt="" />
      </div>
      <div className="flex grow px-2 justify-between">
        <div className="flex flex-col overflow-hidden">
          <Link
            className={`${
              !name
                ? "w-full my-1 h-5 bg-slate-500 rounded-lg animate-pulse"
                : ""
            }text-slate-50 text-md font-semibold hover:underline `}
            to={`../../song/${id}`}
            relative="path"
          >
            {name}
          </Link>
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
        {id ? <LikeButton
            favorite={song}
            isFavorite={isFavorite("song", song)}
            addItem={addSong}
            removeItem={removeSong}
          /> : null}
      </div>
    </div>
  );
};

export default FavoriteSongCard;
