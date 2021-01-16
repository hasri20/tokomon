import { START_FETCHING, END_FETCHING } from "../../constants/actionTypes";

export const startFetchingAction = () => {
  return { type: START_FETCHING };
};

export const endFetchingAction = () => {
  return { type: END_FETCHING };
};
