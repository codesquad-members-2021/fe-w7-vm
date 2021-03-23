const { createDom } = require('./util/util');

const div = createDom('div');
const span = createDom('span');

export const getMonitorMoneyHTML = (price) =>
  span({ value: price, classes: ['monitor-money__price'] }) + span({ value: '원' });

export const getMonitorStatusHTML = (status) =>
  div({ value: status, classes: ['monitor-status__line'] });
