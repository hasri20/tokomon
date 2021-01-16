import { FETCH_TOKOMON_DATA } from "../../constants/actionTypes";

export const fetchTokomonData = ({ name, imageUrl, types, moves }) => {
  return {
    type: FETCH_TOKOMON_DATA,
    payload: { name, imageUrl, types, moves },
  };
};
