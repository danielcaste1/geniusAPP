import React from 'react';

const SongResult = ({image, title, artist, urlSong, urlArtist}) => {
  return (
    <div className={`${!image ? "animate-pulse" : "" } flex items-center w-full h-16 rounded-md my-2 py-3 bg-slate-900/50 hover:bg-slate-900 shadow-md shadow-slate-900/50`}>
      <div className='mx-3  w-10'>
        <img src={image} alt="" />
      </div>
      <div className='flex flex-col ' >
        <a target="_blank" href={`${urlSong}`} className='hover:underline text-lg font-semibold text-slate-100'> {title} </a>
        <a target="_blank" href={`${urlArtist}`} className='hover:underline text-sm text-slate-100/50'> {artist} </a>
      </div>
    </div>
  );
}

export default SongResult;
