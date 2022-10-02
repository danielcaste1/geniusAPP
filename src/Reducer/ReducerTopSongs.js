const reducerObject = (state, payload) => ({
  [actionTypes.LOAD_TOP_SONGS]: {
    ...state,
    topSongs: payload.songs,
    nextPage: payload.nextPage,
    prevPage: payload.nextPage ? payload.nextPage - 2 : ((state.prevPage + 1) === 1 ? undefined : state.prevPage + 1 ),
    loading: false,
  },
  [actionTypes.LOADING]: {
    ...state,
    loading: true,
  },
});

const actionTypes = {
  LOAD_TOP_SONGS: "LOAD_TOP_SONGS",
  LOADING: "LOADING",
};

const reducer = (state, action) => {
  if (reducerObject(state, action.payload)[action.type]) {
    return reducerObject(state, action.payload)[action.type];
  }
  return state;
};

export { actionTypes, reducer };
