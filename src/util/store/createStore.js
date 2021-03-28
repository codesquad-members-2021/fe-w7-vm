const createStore = (reducer) => {
  
  let state = {};
  let listeners = [];

  const getState = () => {
    // return {...state};
    return state[Object.keys(state)[0]]
  }
  
  const dispatch = (action) => {
    const reducerReturn = reducer(state, action);
    state = reducerReturn.state; 
    
    const payloadReturn = reducerReturn.payloadReturn
    notify(action, payloadReturn);
  }
  
  const subscribe = (actionType, func) => {
    if (!listeners[actionType]) {
      listeners[actionType] = [func];
    } else {
      listeners[actionType].push(func);
    }
  }

  const unsubscribe = (observer) => {
    // listeners = listeners.filter((listener) => {
    //   return listener !== observer;
    // });
  }

  const notify = ({type, payload}, payloadReturn = undefined) => {
    listeners[type]?.forEach((subscriber) => {
      if (!payloadReturn) {
        subscriber(payload);
      } else {
        subscriber(payloadReturn);
      }
    });
  }
  
  return { getState, dispatch, subscribe, unsubscribe, notify }
}

export default createStore;