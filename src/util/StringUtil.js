export default class StringUtil {
  static getLocaleMoney({ money, currency }) {
    return money.toLocaleString('en-US', { style: 'currency', currency });
  }
}