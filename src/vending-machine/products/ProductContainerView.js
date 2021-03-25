import { _ } from "../../util/util"
import ProductView from "./ProductView.js"

export default class ProductContainerView {
    constructor(URL, productModel) {
        this.model = productModel;
        this.productView = new ProductView(URL, productModel);
        this.$container;
        this.init();
    }
    init() {
        this.defaultRender();
        this.productView.init(this.$container);
        this.setEvent();
    }
    defaultRender() {
        this.$container = this.getContainerEl();
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
    renderAvailable(e) {
        const indexArr = e.detail.itemIdxArr;
        this.$productsArr.forEach(e => e.classList.remove('.available'))
        if(indexArr.length == 0) return;
        indexArr.forEach(i => this.$productsArr[i].classList.add('.available'));
    }
    getEl() {
        return this.$container;
    }
}