import { CATCH_TOKOMON, RELEASE_TOKOMON } from "../../constants/actionTypes";

export const catchTokomon = ({ nickname, tokomonType }) => {
  return {
    type: CATCH_TOKOMON,
    payload: { nickname, tokomonType },
  };
};

export const releaseTokomon = ({ nickname, tokomonType }) => {
  return {
    type: RELEASE_TOKOMON,
    payload: { nickname, tokomonType },
  };
};
