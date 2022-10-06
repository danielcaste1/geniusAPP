import useLocalStorage from "../Hooks/useLocalStorage";

const useFavorites = () => {
  const { item: favorites, updateItem: updateFavorites } =
    useLocalStorage("favorites");

  const { artists, songs } = favorites;

  const addSong = (newSong) => {
    const newSongs = songs.slice();
    newSongs.unshift(newSong);
    const newFavorites = { ...favorites, songs: newSongs };
    updateFavorites(newFavorites);
  };

  const removeSong = (songToRemove) => {
    const newSongs = songs.slice();
    const index = newSongs.findIndex((song) => song.id === songToRemove.id);
    newSongs.splice(index, 1);
    const newFavorites = { ...favorites, songs: newSongs };
    updateFavorites(newFavorites);
  };

  const addArtist = (newArtist) => {
    const newArtists = artists.slice();
    newArtists.unshift(newArtist);
    const newFavorites = { ...favorites, artists: newArtists };
    updateFavorites(newFavorites);
  };

  const removeArtist = (ArtistToRemove) => {
    const newArtists = artists.slice();
    const index = newArtists.findIndex(
      (artists) => artists.id === ArtistToRemove.id
    );
    newArtists.splice(index, 1);
    const newFavorites = { ...favorites, artists: newArtists };
    updateFavorites(newFavorites);
  };

  const isFavorite = (songOrArtist, searched) => {
    switch (songOrArtist) {
      case "artist":
        const newArtists = artists.slice();
        const artist = newArtists.find(
          (artistToFind) => artistToFind.id === searched.id
        );
        return artist;
      case "song":
        const newSongs = songs.slice();
        const song = newSongs.find(
          (songToFind) => songToFind.id === searched.id
        );
        return song;
      default:
        break;
    }
  };
  return { favorites, addSong,addArtist,removeArtist, removeSong, isFavorite };
};

export default useFavorites;
