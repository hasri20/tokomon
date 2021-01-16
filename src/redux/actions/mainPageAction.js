import { FETCH_TOKOMON_LIST, ADVANCE_PAGE } from "../../constants/actionTypes";

export const fetchTokomonList = (data) => {
  return { type: FETCH_TOKOMON_LIST, payload: { data } };
};

export const nextPage = (data) => {
  return { type: ADVANCE_PAGE };
};
