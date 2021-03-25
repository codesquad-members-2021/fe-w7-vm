const ADD_ITEM = "goods/ADD_ITEM";
const OUT_ITEM = "goods/OUT_ITEM";

const addItem = (item) => {
  return { type: ADD_ITEM, payload: item }
}

const outItem = (item) => {
  return { type: OUT_ITEM, payload: item }
}

export { addItem, outItem };