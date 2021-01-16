const setLisOwnedTokomon = (currentOwnedTokomon) => {
  localStorage.setItem("ownedTokomon", JSON.stringify(currentOwnedTokomon));
};

export default setLisOwnedTokomon;
