import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FavoritesContext } from "../Contexts/FavoritesContext";
import LikeButton from "./Buttons/LikeButton";

const FavoriteArtistCard = ({ artist }) => {
  const { isFavorite, addArtist, removeArtist } = useContext(FavoritesContext);
  const { id, name, picture } = artist;
  return (
    <div className="flex w-full items-center my-2 mx-3 bg-slate-900/50 hover:bg-slate-900/100 rounded-md overflow-hidden">
      <div className={`${!id ? "animate-pulse" : ""} w-32 h-32 bg-slate-700`}>
        <img className="w-full" src={picture} alt="" />
      </div>
      <div className="flex grow px-2 justify-between">
        <div className="flex flex-col">
          <Link
            className={`${
              !name
                ? "w-full my-1 h-5 bg-slate-500 rounded-lg animate-pulse"
                : ""
            }text-slate-50 text-md font-semibold hover:underline`}
            to={`../../artist/${id}`}
            relative="path"
          >
            {name}
          </Link>
        </div>
        {id ? (
          <LikeButton
            favorite={artist}
            isFavorite={isFavorite("artist", artist)}
            addItem={addArtist}
            removeItem={removeArtist}
          />
        ) : null}
      </div>
    </div>
  );
};

export default FavoriteArtistCard;
