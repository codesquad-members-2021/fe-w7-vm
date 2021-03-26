import * as ACTION from "../enums/action.js"

const initialState = {
  wallet: []
}

const wallet = (state = initialState, { type, payload }) => {
  
  switch(type) {
    case ACTION.ADD_MONEY:
      const name = Object.keys(payload)[0];
      const value = Object.values(payload)[0];
  
      // 처음 들어올 때
      if (!state.wallet?.[name]) {
        return  { 
          state: {
            wallet: {
              ...state.wallet,
              [name]: [value]
            } 
          }
        }
      }
      // 처음 들어오는게 아닐 때
      return {
        state: {
          wallet: {
            ...state.wallet,
            [name]: [...state.wallet[name], value]   
          }
        }
      }
    
    case ACTION.OUT_MONEY:
      const payloadReturn = state.wallet[payload].pop();
      return {
        state: {
          wallet: {
            ...state.wallet,
            [payload]: state.wallet[payload]
          }
        },
        payloadReturn: payloadReturn
      }
    default:
      console.log("error");
  }
}

export default wallet;