import React, { useContext } from 'react';
import { FavoritesContext } from '../../Contexts/FavoritesContext';
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

const LikeButton = ({isFavorite, song}) => {
  const { addSong, removeSong } = useContext(FavoritesContext);
  return (
    <button className='mx-3 text-3xl text-slate-50'
    onClick={ !isFavorite ?  () => addSong(song) : ()=> removeSong(song)}
    >
      {
        isFavorite ? (
          <AiFillStar/>
        ): <AiOutlineStar/>
      }
    </button>
  );
}

export default LikeButton;
