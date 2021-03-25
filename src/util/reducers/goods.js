const ADD_ITEM = "goods/ADD_ITEM";
const OUT_ITEM = "goods/OUT_ITEM";

const initialState = {
  goods: []
}

const goods = (state = initialState, { type, payload }) => {
  
  switch(type) {
    case ADD_ITEM:
      // 처음 들어올 때
      const name = Object.keys(payload)[0];
      const value = Object.values(payload)[0];
  
      if (!state.goods?.[name]) {
        return  { 
          goods: {
            ...state.goods,
            [name]: [value]
          } 
        }
      }
      // 처음 들어오는게 아닐 때
      return {
        goods: {
          ...state.goods,
          [name]: [...state.goods[name], value]   
        }
      }
    
    case OUT_ITEM:
      console.log(state.goods)
      console.log(payload)
      const returnItem = state.goods[payload].pop();
      return {
        goods: {
          ...state.goods,
          [payload]: state.goods[payload]
        }
      }
    default:
      console.log("error");
  }
}

export default goods;