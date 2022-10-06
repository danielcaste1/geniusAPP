import React, { createContext } from "react";
import useFavorites from "../Hooks/useFavorites";

const FavoritesContext = createContext();

const FavoritesProvider = (props) => {
  const { favorites, addSong, removeSong, addArtist, removeArtist, isFavorite } = useFavorites();
  return (
    <FavoritesContext.Provider
      value={{ favorites, addSong, removeSong,addArtist, removeArtist, isFavorite }}
    >{props.children}</FavoritesContext.Provider>
  );
};

export {FavoritesProvider,FavoritesContext};
