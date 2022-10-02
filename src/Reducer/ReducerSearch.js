const actionTypes = {
  TYPING: "TYPING",
  LOADING: "LOADING",
  RESULT: "RESULT",
};
const reducerObject = (state, payload) => ({
  [actionTypes.TYPING] : {
    ...state,
    queryValue: payload.queryValue,
  },
  [actionTypes.LOADING] : {
    ...state,
    loading: true,
  },
  [actionTypes.RESULT] : {
    ...state,
    resultSongs: payload.resultSongs,
    loading: false,
    queryMade: true
  }
});

const reducer = (state, action) => {
  if (reducerObject(state, action.payload)[action.type]) {
    return reducerObject(state, action.payload)[action.type];
  }
  return state;
};

export { actionTypes, reducer };
