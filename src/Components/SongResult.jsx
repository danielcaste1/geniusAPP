import React from 'react';
import { Link } from 'react-router-dom';

const SongResult = ({image, songID, title, artistID, artist,}) => {
  return (
    <div className={`${!image ? "animate-pulse h-14" : "" } flex items-center w-full  rounded-md my-2 py-3 bg-slate-900/50 hover:bg-slate-900 shadow-md shadow-slate-900/50`}>
      <div className='mx-3  w-10'>
        <img src={image} alt="" />
      </div>
      <div className='flex flex-col ' >
        <Link to={`../song/${songID}`} relative="path" className='hover:underline text-lg font-semibold text-slate-100'> {title} </Link>
        <Link to={`../artist/${artistID}`} relative="path" className='hover:underline text-sm text-slate-100/50'> {artist} </Link>
      </div>
    </div>
  );
}

export default SongResult;
