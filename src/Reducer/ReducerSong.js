const actionTypes = {
  LOAD_DATA: "LOAD_DATA",
  LOADING: "LOADING",
};
const reducerObject = (state, payload) => ({
  [actionTypes.LOADING] : {
    ...state,
    loading: true,
  },
  [actionTypes.LOAD_DATA] : {
    ...state,
    name: payload.name,
    picture: payload.picture,
    album: payload.album,
    artist: payload.artist,
    artistID: payload.artistID,
    geniusURL: payload.geniusURL,
    appleURL: payload.appleURL,
    loading: false,
  }
});

const reducer = (state, action) => {
  if (reducerObject(state, action.payload)[action.type]) {
    return reducerObject(state, action.payload)[action.type];
  }
  return state;
};

export { actionTypes, reducer };
