import React, { Fragment } from "react";
import PageButton from "../Components/Buttons/PageButton.jsx";
import SongCard from "../Components/SongCard.jsx";

function TopSongs({ loading, songs, prevPage, nextPage, loadTopSongs }) {
  return (
    <div className="h-screen w-full">
      <div className="flex flex-col justify-center items-center h-full py-2 rounded-xl">
        <h1 className="text-2xl font-bold text-slate-50 my-3">Top songs 🔥</h1>
        <div className="grid grid-cols-3 gap-3 m-2 p-2">
          {!loading && songs ? (
            songs.map((song) => (
              <SongCard
                key={song.id}
                title={song.title}
                artist={song.primary_artist.name}
                picture={song.song_art_image_thumbnail_url}
              />
            ))
          ) : (
            <Fragment>
              <SongCard />
              <SongCard />
              <SongCard />
              <SongCard />
              <SongCard />
              <SongCard />
            </Fragment>
          )}
        </div>
        <div>
          <PageButton isDisabled={!prevPage} onClick={() => loadTopSongs(prevPage)} icon="Prev" />
          <PageButton isDisabled={!nextPage} onClick={() => loadTopSongs(nextPage)} icon="Next" />
        </div>
      </div>
    </div>
  );
}

export default TopSongs;
