const actionTypes = {
  ON_SET_ITEM: "ON_SET_ITEM"
}
const reducerObject = (state, payload) => ({
  [actionTypes.ON_SET_ITEM] : {
    ...state,
    item: payload.item
  }
});

const reducer = (state, action) => {
  if (reducerObject(state, action.payload)[action.type]) {
    return reducerObject(state, action.payload)[action.type];
  }
  return state;
};

export { actionTypes, reducer };
