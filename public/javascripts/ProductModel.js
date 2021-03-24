import { _ } from "./util.js";
import {Observable} from "./Observer"


export class ProductModel extends Observable {
	constructor(data) {
		super();
		this.list = data.productInfo;
	}

	getPurchasableList(money) {
		return this.list.filter((e) => e.price < money && e.stock > 0);
	}

	changeMoneyEvent(money) {//자판기에 돈이 투입됐을 때 발생하는 이벤트
		this.notify(this.getPurchasableList(money));
	}

	sell(itemName) {
        const targetItem = this.list.find(({ name }) => name === itemName)
        if(targetItem.stock > 0) {
            targetItem.stock--;
            console.log(targetItem.stock)
            //대충 targetItem.price를 Progress쪽으로 넘겨주는 함수
        }
	}
}
