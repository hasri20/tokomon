const getListOwnedTokomon = () => {
  if (localStorage.getItem("ownedTokomon") !== null) {
    return JSON.parse(localStorage.getItem("ownedTokomon"));
  } else {
    localStorage.setItem("ownedTokomon", "[]");
    return JSON.parse(localStorage.getItem("ownedTokomon"));
  }
};

export default getListOwnedTokomon;
