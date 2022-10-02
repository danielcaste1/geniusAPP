import React, { Fragment } from "react";
import SongResult from "../Components/SongResult.jsx";

const SearchResults = ({ resultSongs, loading, queryMade }) => {
  return (
    <div className="flex flex-col my-10 items-start justify-center w-10/12">
      {loading ? (
        <Fragment>
          <SongResult />
        </Fragment>
      ) : resultSongs.length && !loading ? (
        resultSongs.map((song) => (
          <SongResult
            image={song.result.header_image_thumbnail_url}
            title={song.result.title}
            artist={song.result.primary_artist.name}
            urlSong={song.result.url} 
            urlArtist={song.result.primary_artist.url} 
          />
        ))
      ) : queryMade && !loading ? (
        <p className="text-slate-200/50 font-semibold w-full text-center">Oops! There was no results for your search... </p>
      ) : (
        null
      )}
    </div>
  );
};

export default SearchResults;
