import { fetchTokomonList, nextPage } from "../redux/actions/mainPageAction";
import { FETCH_TOKOMON_LIST, ADVANCE_PAGE } from "../constants/actionTypes";

describe("action", () => {
  it("should create an action that start fetching tokomon list", () => {
    const expectedAction = {
      type: FETCH_TOKOMON_LIST,
      payload: { data: ["bulbasaur", "test"] },
    };
    expect(fetchTokomonList(["bulbasaur", "test"])).toEqual(expectedAction);
  });
});

describe("action", () => {
  it("should create an action to move to next page", () => {
    const expectedAction = {
      type: ADVANCE_PAGE,
    };
    expect(nextPage()).toEqual(expectedAction);
  });
});
