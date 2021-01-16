import { catchTokomon, releaseTokomon } from "../redux/actions/tokomonAction";
import { CATCH_TOKOMON, RELEASE_TOKOMON } from "../constants/actionTypes";

describe("action", () => {
  it("should create an action to catch tokomon", () => {
    const expectedAction = {
      type: CATCH_TOKOMON,
      payload: {
        nickname: "test",
        tokomonType: "bulba",
      },
    };
    expect(catchTokomon({ nickname: "test", tokomonType: "bulba" })).toEqual(
      expectedAction
    );
  });
});

describe("action", () => {
  it("should create an action to release tokomon", () => {
    const expectedAction = {
      type: RELEASE_TOKOMON,
      payload: {
        nickname: "test",
        tokomonType: "bulba",
      },
    };
    expect(releaseTokomon({ nickname: "test", tokomonType: "bulba" })).toEqual(
      expectedAction
    );
  });
});
