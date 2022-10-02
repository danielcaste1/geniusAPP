const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "414719ea0fmsha0ecd054478251ep11468bjsn6da2fe06c4dc",
    "X-RapidAPI-Host": "genius.p.rapidapi.com",
  },
};

export const getTopSongs = async (page) => {
  const call = await fetch(
    `https://genius.p.rapidapi.com/artists/1050455/songs?sort=popularity&page=${page}&per_page=6`,
    options
  );
  const data = await call.json();

  return data;
};



export const getQuerySongs = async (queryString)=>{
  const call = await fetch(`https://genius.p.rapidapi.com/search?q=${queryString}`, options);
  const data = await call.json();
  return data;
}