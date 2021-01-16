import {
  FETCH_TOKOMON_LIST,
  START_FETCHING,
  END_FETCHING,
  ADVANCE_PAGE,
} from "../../constants/actionTypes";

const initialState = {
  tokomonList: [],
  isFetching: false,
  page: 0,
};

const mainPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TOKOMON_LIST:
      const currentTokomonList = [...state.tokomonList, ...action.payload.data];
      return {
        ...state,
        tokomonList: [...new Set(currentTokomonList)],
      };
    case ADVANCE_PAGE:
      return { ...state, page: state.page + 1 };
    case START_FETCHING:
      return {
        ...state,
        isFetching: true,
      };
    case END_FETCHING:
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default mainPageReducer;
