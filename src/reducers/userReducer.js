const initialState = null;

function reducer(state, action) {
  if (action.type === "USER") {
    return action.payload;
  }else if(action.type === "CLEAR"){
    return null;
  }
  return state;
}

export { reducer, initialState };
