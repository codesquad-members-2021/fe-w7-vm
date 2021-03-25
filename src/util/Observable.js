export default class Observable {
  constructor() {
    this.eventHandlerMap = new Map();
  }

  subscribeEvent({ event, callback }) {
    if (!this.eventHandlerMap.has(event))
      this.eventHandlerMap.set(event, []);

    this.eventHandlerMap.get(event).push(callback);
  }

  unsubscribeEvent({ event, callback }) {
    if (!this.eventHandlerMap.has(event))
      throw new Error('Invalid arguments');
  
    const eventHandlers = this.eventHandlerMap.get(event);
    const callbackIdx = eventHandlers.findIndex(callback);

    if (callbackIdx === -1)
      throw new Error('Invalid arguments');

    eventHandlers.splice(callbackIdx, 1);
  }

  dispatchEvent(customEventObj) {
    this.eventHandlerMap.get(customEventObj.type)?.forEach(callback(customEventObj));
  };
}