import { _ } from "../../util/util"
import ProductView from "./ProductView.js"

export default class ProductContainerView {
    constructor(URL, productModel) {
        this.URL = URL
        this.model = productModel;
        this.menuInfo;
        this.menuImgs;
        this.$container;
        this.$products = [];
        this.init();
    }
    init() {
        this.$container = this.getContainerEl();
        this.setEvent();
        this.fetchInfo();
    }
    getContainerEl() {
        return _.genEl('UL', {
            classNames: ['products_container']
        });
    }
    setEvent() {
        this.$container.addEventListener('click', this.sendIdxToModel.bind(this))
    }
    sendIdxToModel({target}) {
        const $product = target.closest('.product')
        if($product == null) return;
        const selectedIdx = $product.dataset.index;
        this.model.notifySelectedItem(selectedIdx); // model에 선택된 아이템 인덱스 전달
    }
    async fetchInfo() {
        const promises = [this.setMenuInfo(), this.setMenuImgs()];
        await Promise.all(promises);
        this.appendProductsEl();
    }
    async setMenuInfo() {
        const res = await fetch(`${this.URL}/menu-info`)
        const menuList = await res.json()
        this.menuInfo = menuList;
        this.model.setMenuInfo(menuList);
    }
    async setMenuImgs() {
        const res = await fetch(`${this.URL}/image`)
        this.menuImgs = await res.json()
    }
    appendProductsEl() {
        this.menuInfo.forEach((e, i) => {
            const productView = new ProductView();
            productView.createProductEl({
                imgURL: this.menuImgs[i],
                name: e.name,
                price: e.price
            }, i)
            const el = productView.getEl();
            this.$container.appendChild(el);
            this.$products.push(el);
        });
    }
    renderAvailable(e) {
        const moneySum = e.detail.moneySum;
        const indexArr = this.model.getAvailableItems(moneySum);
        this.$products.forEach(e => e.classList.remove('available'))
        if(indexArr.length == 0) return;
        indexArr.forEach(i => this.$products[i].classList.add('available'));
    }
    getEl() {
        return this.$container;
    }
}