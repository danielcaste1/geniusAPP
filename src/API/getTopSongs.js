const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "414719ea0fmsha0ecd054478251ep11468bjsn6da2fe06c4dc",
    "X-RapidAPI-Host": "genius.p.rapidapi.com",
  },
};

export const getTopSongs = async (artistID, page) => {
  const call = await fetch(
    `https://genius.p.rapidapi.com/artists/${artistID}/songs?sort=popularity&page=${page}&per_page=6`,
    options
  );
  const data = await call.json();

  return data;
};

export const getSong = async(songID) =>{
  const call = await fetch(`https://genius.p.rapidapi.com/songs/${songID}`, options);
  const data = await call.json();
  return data;
}

export const getQuerySongs = async (queryString)=>{
  const call = await fetch(`https://genius.p.rapidapi.com/search?q=${queryString}`, options);
  const data = await call.json();
  return data;
}

export const getArtist = async(artistID) =>{
  const call = await fetch(`https://genius.p.rapidapi.com/artists/${artistID}`, options);
  const data = await call.json();
  return data;
}
