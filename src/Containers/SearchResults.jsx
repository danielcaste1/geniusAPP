import React from "react";
import SongResult from "../Components/SongResult.jsx";

const SearchResults = ({ resultSongs, loading, queryMade }) => {
  return (
    <div className="flex flex-col my-10 items-start justify-center w-10/12">
      {loading ? (
        <SongResult />
      ) : resultSongs.length && !loading ? (
        resultSongs.map((song) => (
          <SongResult
            key={song.result.id}
            image={song.result.song_art_image_thumbnail_url}
            songID={song.result.id}
            title={song.result.title}
            artistID={song.result.primary_artist.id}
            artist={song.result.primary_artist.name}
          />
        ))
      ) : !queryMade ? (
        <p className="text-slate-200/50 font-light w-full text-center">
          What song are you looking for?
        </p>
      ) : <p className="text-slate-200/50 font-light w-full text-center">
      Oops! There was no results for your search...
    </p>}
    </div>
  );
};

export default SearchResults;
