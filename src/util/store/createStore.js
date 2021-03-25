const createStore = (reducer) => {
  
  let state = {};
  let listeners = [];

  const getState = () => {
    // return {...state};
    return state[Object.keys(state)[0]]
    // return state;
  }
  const dispatch = (action) => {
    state = reducer(state, action);
  }
  const subscribe = (func) => {
    listeners.push(func);
  }
  const unsubscribe = (observer) => {
    listeners = listeners.filter((listener) => {
      return listener !== observer;
    });
  }
  const notify = (data) => {
    listeners.forEach((listener) => {
      listener(data);
    })
  }
  
  return { getState, dispatch, subscribe, unsubscribe, notify }
}

export default createStore;