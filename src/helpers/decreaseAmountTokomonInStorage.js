import checkCurrentTokomonAmount from "./checkCurrentTokomonAmount";

const decreaseAmountTokomonInStorage = (tokomonType) => {
  const currentAmount = checkCurrentTokomonAmount(tokomonType);
  localStorage.setItem(tokomonType, currentAmount - 1);
};

export default decreaseAmountTokomonInStorage;
