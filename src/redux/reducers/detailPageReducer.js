import { FETCH_TOKOMON_DATA } from "../../constants/actionTypes";

const initialState = {
  name: "",
  imageUrl: "",
  types: [],
  moves: [],
};

const mainPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TOKOMON_DATA:
      return {
        ...state,
        name: action.payload.name,
        imageUrl: action.payload.imageUrl,
        types: action.payload.types,
        moves: action.payload.moves,
      };
    default:
      return state;
  }
};

export default mainPageReducer;
