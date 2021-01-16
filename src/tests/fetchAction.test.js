import {
  startFetchingAction,
  endFetchingAction,
} from "../redux/actions/fetchAction";
import { START_FETCHING, END_FETCHING } from "../constants/actionTypes";

describe("action", () => {
  it("should create an action to indicate start fetching", () => {
    const expectedAction = {
      type: START_FETCHING,
    };
    expect(startFetchingAction()).toEqual(expectedAction);
  });
});

describe("action", () => {
  it("should create an action to indicate end fetching", () => {
    const expectedAction = {
      type: END_FETCHING,
    };
    expect(endFetchingAction()).toEqual(expectedAction);
  });
});
