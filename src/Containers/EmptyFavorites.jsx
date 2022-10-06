import React from 'react';
import { TiStarFullOutline } from "react-icons/ti";

const EmptyFavorites = ({category}) => {
  return (
    <div className='text-slate-50/50 mt-10 flex flex-col h-full justify-center items-center'>
      <TiStarFullOutline className='text-4xl animate-bounce'/>
      <span className='text-lg font-light'>You have no favorite {category} yet</span>
    </div>
  );
}

export default EmptyFavorites;
