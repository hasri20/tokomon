const checkCurrentTokomonAmount = (tokomon) => {
  const amount = localStorage.getItem(tokomon);
  return JSON.parse(amount);
};

export default checkCurrentTokomonAmount;
