import { _ } from '../../util/util.js';
import Observable from '../../util/Observable.js';

export default class ProductContainerModel extends Observable{
    constructor() {
        super();
        this.menuInfo;
    }
    setMenuInfo(json) {
        this.menuInfo = json;
    }
    notifySelectedItem(idx) {
        this.reduceSum(idx);
        this.printSelectedLog(idx);
    }
    reduceSum(i) {
        this.dispatchEvent(
            new CustomEvent('reduce-money-sum', {
                detail: { price: this.menuInfo.list[i].price }
            })
        );
    }
    printSelectedLog(i) {
        this.dispatchEvent(
            new CustomEvent('print-selected', {
                detail: { name: this.menuInfo.list[i].name }
            })
        );
    }
}