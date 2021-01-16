import getListOwnedTokomon from "./getListOwnedTokomon";

const isNicknameExist = (nickname) => {
  const allNicknameTaken = getListOwnedTokomon();
  return allNicknameTaken.includes(nickname);
};

export default isNicknameExist;
