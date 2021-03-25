class useDispatchInit {
  constructor() {
    this.appStore = null;
  }
  init (appStore) {
    this.appStore = appStore;
  }
  useDispatch(storeName) {
    return this.appStore[storeName].dispatch;
  }
  useSelector(selectFunc) {
    return selectFunc(this.appStore)
    return this.appStore[storeName];
  }
}

const myStore = new useDispatchInit();

const useStore = myStore.init.bind(myStore);

const useDispatch = (storeName) => {
  return myStore.useDispatch(storeName);
}

const useSelector = (selectFunc) => {
  console.log(selectFunc)
  return myStore.useSelector(selectFunc)
}

export {useStore, useDispatch, useSelector };