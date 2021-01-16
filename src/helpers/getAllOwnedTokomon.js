import getListOwnedTokomon from "./getListOwnedTokomon";

const getAllOwnedTokomon = () => {
  const listOwnedTokomon = getListOwnedTokomon();
  const mapOwnedTokomon = {};

  for (const tokomon of listOwnedTokomon) {
    mapOwnedTokomon[tokomon] = localStorage.getItem(tokomon);
  }

  return mapOwnedTokomon;
};

export default getAllOwnedTokomon;
