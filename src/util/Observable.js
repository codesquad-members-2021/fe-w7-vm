export default class Observable {
  subscribeEvent({ event, callback }) {
    this.addEventListener(event, callback);
  }

  unsubscribeEvent({ event, callback }) {
    this.removeEventListener(event, callback);
  }
}