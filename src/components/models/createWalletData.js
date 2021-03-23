import { _ } from '../../util/const';
import { createRandomNumber } from '../../util/util';

export default class CreateWalletData {
  getWalletData() {
    const walletDataArray = _.walletMoneyArray.map((el) => {
      return {
        unit: el,
        count: createRandomNumber(),
      };
    });
    return walletDataArray;
  }
}
