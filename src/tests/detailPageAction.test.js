import { fetchTokomonData } from "../redux/actions/detailPageAction";
import { FETCH_TOKOMON_DATA } from "../constants/actionTypes";

describe("action", () => {
  it("should create an action to fetch tokomon data", () => {
    const expectedAction = {
      type: FETCH_TOKOMON_DATA,
      payload: {
        name: "test",
        imageUrl: "test",
        types: ["test"],
        moves: ["test"],
      },
    };
    expect(
      fetchTokomonData({
        name: "test",
        imageUrl: "test",
        types: ["test"],
        moves: ["test"],
      })
    ).toEqual(expectedAction);
  });
});
