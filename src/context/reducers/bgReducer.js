import Artist from "../../images/artist.jpg";
const bgReducer = (state = null, action) => {
  switch (action.type) {
    case "SET_BG":
      return action.background || Artist;
    default:
      return state || null;
  }
};
export default bgReducer;
