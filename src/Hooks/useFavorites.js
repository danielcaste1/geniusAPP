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

  const isFavorite = (searchedSong) => {
    const newSongs = songs.slice();
    const song = newSongs.find(
      (songToFind) => songToFind.id === searchedSong.id
    );
    return song;
  };
  return { favorites, addSong, removeSong, isFavorite };
};

export default useFavorites;
