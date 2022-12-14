const actionTypes = {
  LOAD_DATA: "LOAD_DATA",
};
const reducerObject = (state, payload) => ({

  [actionTypes.LOAD_DATA]: {
    ...state,
    id: payload.id,
    name: payload.name,
    picture: payload.picture,
    album: payload.album,
    artist: payload.artist,
    artistID: payload.artistID,
    geniusURL: payload.geniusURL,
    appleURL: payload.appleURL,
  },
});

const reducer = (state, action) => {
  if (reducerObject(state, action.payload)[action.type]) {
    return reducerObject(state, action.payload)[action.type];
  }
  return state;
};

export { actionTypes, reducer };
