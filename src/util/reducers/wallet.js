import * as ACTION from "../enums/action.js"

const initialState = {
  wallet: []
}

const wallet = (state = initialState, { type, payload }) => {
  const name = Object.keys(payload)[0];
  const value = Object.values(payload)[0];
  
  switch(type) {
    case ACTION.ADD_MONEY:
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
      const payloadReturn = state.wallet[name].pop();
      return {
        state: {
          wallet: {
            ...state.wallet,
            [name]: state.wallet[name]
          }
        },
        payloadReturn: payloadReturn
      }
    default:
      console.log("error");
  }
}

export default wallet;