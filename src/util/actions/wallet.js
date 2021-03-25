const ADD_MONEY = "wallet/ADD_MONEY";
const OUT_MONEY = "wallet/OUT_MONEY";

const addMoney = (item) => {
  return { type: ADD_MONEY, payload: item }
}

const outMoney = (item) => {
  return { type: OUT_MONEY, payload: item }
}

export { addMoney, outMoney };