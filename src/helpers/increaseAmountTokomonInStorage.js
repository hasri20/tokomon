const increaseAmountTokomonInStorage = (tokomonType, currentAmount) => {
  localStorage.setItem(tokomonType, currentAmount + 1);
};

export default increaseAmountTokomonInStorage;
