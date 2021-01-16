import getListOwnedTokomon from "./getListOwnedTokomon";
import setListOwnedTokomon from "./setListOwnedTokomon";

const pushNicknameToStorage = (nickname) => {
  const listOwnedTokomon = getListOwnedTokomon();
  listOwnedTokomon.push(nickname);
  setListOwnedTokomon(listOwnedTokomon);
};

export default pushNicknameToStorage;
