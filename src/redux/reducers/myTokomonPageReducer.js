import { CATCH_TOKOMON, RELEASE_TOKOMON } from "../../constants/actionTypes";
import checkCurrentTokomonAmount from "../../helpers/checkCurrentTokomonAmount";
import getAllOwnedTokomon from "../../helpers/getAllOwnedTokomon";
import getListOwnedTokomon from "../../helpers/getListOwnedTokomon";
import storeTokomonType from "../../helpers/storeTokomonType";
import removeTokomonType from "../../helpers/removeTokomonType";
import increaseAmountTokomonInStorage from "../../helpers/increaseAmountTokomonInStorage";
import decreaseAmountTokomonInStorage from "../../helpers/decreaseAmountTokomonInStorage";
import pushNicknameToStorage from "../../helpers/pushNicknameToStorage";
import popNicknameFromStorage from "../../helpers/popNicknameFromStorage";

const initialState = {
  listNicknameTaken: getListOwnedTokomon(),
  ownedTokomon: getAllOwnedTokomon(),
};

const myTokomonPageReducer = (state = initialState, action) => {
  if (action.type === CATCH_TOKOMON) {
    const currentAmount = checkCurrentTokomonAmount(action.payload.tokomonType);
    increaseAmountTokomonInStorage(action.payload.tokomonType, currentAmount);
    pushNicknameToStorage(action.payload.nickname);
    storeTokomonType(action.payload.nickname, action.payload.tokomonType);

    return {
      ...state,
      listNicknameTaken: [...state.listNicknameTaken, action.payload.nickname],
      ownedTokomon: Object.assign(state.ownedTokomon, {
        [action.payload.nickname]: action.payload.tokomonType,
      }),
    };
  } else if (action.type === RELEASE_TOKOMON) {
    const currentListOwnedTokomon = getListOwnedTokomon();
    popNicknameFromStorage(action.payload.nickname, currentListOwnedTokomon);
    decreaseAmountTokomonInStorage(action.payload.tokomonType);
    removeTokomonType(action.payload.nickname);
    const currentOwnedTokomon = { ...state.ownedTokomon };
    delete currentOwnedTokomon[action.payload.nickname];

    return {
      ...state,
      listNicknameTaken: currentListOwnedTokomon,
      ownedTokomon: currentOwnedTokomon,
    };
  } else {
    return state;
  }
};

export default myTokomonPageReducer;
