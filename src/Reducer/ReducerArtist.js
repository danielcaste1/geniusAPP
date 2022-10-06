const reducerObject = (state, payload) => ({
  [actionTypes.LOAD_DATA]: {
    ...state,
    id: payload.id,
    name: payload.name,
    picture: payload.picture,
    songs: payload.songs,
    nextPage: payload.nextPage,
    prevPage: payload.nextPage ? payload.nextPage - 2 : (!(state.nextPage === 2) && ((state.prevPage + 1) === 1) ? undefined : state.prevPage + 1 ),
    loading: false,
  },
  [actionTypes.LOADING]: {
    ...state,
    loading: true,
  },
});

const actionTypes = {
  LOAD_DATA: "LOAD_DATA",
  LOADING: "LOADING",
};

const reducer = (state, action) => {
  if (reducerObject(state, action.payload)[action.type]) {
    return reducerObject(state, action.payload)[action.type];
  }
  return state;
};

export { actionTypes, reducer };
