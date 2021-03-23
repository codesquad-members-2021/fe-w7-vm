import { createDom } from './utill'

export const walletStatus = () => {
  div(renderWallet)
}

const div = createDom('div')
const span = createDom('span')

export const renderWalletTpl = (moneyType, count) => {
  if (count === 0) {
    const walletMoney =
      div({
        value: `${moneyType}원`,
        classes: ['wallet__money-type', 'disabled'],
      }) +
      div({
        value: count,
        classes: ['wallet__type-count'],
      })

    return div({
      value: walletMoney,
    })
  }
  const walletMoney =
    div({
      value: `${moneyType}원`,
      classes: ['wallet__money-type'],
    }) +
    div({
      value: count,
      classes: ['wallet__type-count'],
    })

  return div({
    value: walletMoney,
  })
}

export const totalWalletTpl = (totalPrice) => {
  return div({
    value: `${totalPrice}원`,
    classes: ['wallet__total-money'],
  })
}

export const getMonitorMoneyHTML = (price) =>
  span({ value: price, classes: ['monitor-money__price'] }) + span({ value: '원' })

export const getMonitorStatusHTML = (status) =>
  div({ value: status, classes: ['monitor-status__line'] })
