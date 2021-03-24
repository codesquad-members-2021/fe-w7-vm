import { _ } from "../../util/util"

export default class ProductContainerView {
    constructor(productModel) {
        this.model = productModel;
        this.$container;
        this.init();
    }
    init() {
        this.defaultRender();
        this.setEvent();
    }
    defaultRender() {
        this.$container = this.getContainerEl();
        document.body.appendChild($container); // 📌📌 append할 위치 수정
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

}