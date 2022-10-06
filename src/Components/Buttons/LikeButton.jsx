import React from 'react';
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

const LikeButton = ({isFavorite, favorite, addItem, removeItem}) => {

  return (
    <button className='mx-3 text-3xl text-slate-50'
    onClick={ !isFavorite ?  () => addItem(favorite) : ()=> removeItem(favorite)}
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
