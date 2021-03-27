import { _ } from '../../util/util.js';
import Observable from '../../util/Observable.js';

export default class ProductModel extends Observable{
    constructor() {
        super();
        this.menuInfo;
    }
    setMenuInfo(list) {
        this.menuInfo = list;
    }
    notifySelectedItem(idx) {
        if(this.menuInfo[idx].stock == 0) return;
        this.reduceSum(idx);
        this.reduceStock(idx);
    }
    // progressScreenView에 보냄 - 투입금액 줄이기
    reduceSum(i) {
        this.dispatchEvent(
            new CustomEvent('product-select', {
                detail: { 
                    price: this.menuInfo[i].price,
                    name: this.menuInfo[i].name
                }
            })
        );
    }
    reduceStock(i) { 
        this.menuInfo[i].stock--;
        if(this.menuInfo[i].stock === 0) {
            this.dispatchEvent(
                new CustomEvent('product-sold-out', {
                    detail: { soldOutIdx: i}
                })
            )
        }
    }
    // ProductContainerView에 계산해서 보내줌
    getAvailableItems(moneySum) {
        let itemIdx = [];
        this.menuInfo.forEach((e, i) => {
            if(e.price <= moneySum) itemIdx.push(i)
        })
        return itemIdx;
    }
}