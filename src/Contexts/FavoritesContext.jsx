import React, { createContext } from "react";
import useFavorites from "../Hooks/useFavorites";

const FavoritesContext = createContext();

const FavoritesProvider = (props) => {
  const { favorites, addSong, removeSong, isFavorite } = useFavorites();
  return (
    <FavoritesContext.Provider
      value={{ favorites, addSong, removeSong, isFavorite }}
    >{props.children}</FavoritesContext.Provider>
  );
};

export {FavoritesProvider,FavoritesContext};
