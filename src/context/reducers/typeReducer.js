const typeReducer = (state = null, action) => {
  switch (action.type) {
    case "SET_TYPE":
      return action.genre || null;
    default:
      return state || null;
  }
};
export default typeReducer;
