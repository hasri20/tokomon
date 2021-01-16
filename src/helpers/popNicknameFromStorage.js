import setLisOwnedTokomon from "./setListOwnedTokomon";

const popNicknameFromStorage = (nickname, listOwnedTokomon) => {
  const indexOfCurrentTokomon = listOwnedTokomon.indexOf(nickname);

  if (indexOfCurrentTokomon > -1) {
    listOwnedTokomon.splice(indexOfCurrentTokomon, 1);
  }

  setLisOwnedTokomon(listOwnedTokomon);
};

export default popNicknameFromStorage;
