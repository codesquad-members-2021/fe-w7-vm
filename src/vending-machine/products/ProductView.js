import { _ } from '../../util/util.js';

export default class ProductView {
    constructor({URL}, productModel) {
        this.URL = URL;
        this.model = productModel;
        this.menuInfo;
        this.menuImgs;
        this.$container;
        this.init();
    }
    async init() {
        this.$contanier = _.$('.products_container')
        const promises = [this.setMenuInfo, this.setMenuImgs];
        Promise.all(promises).then(this.renderDefault);
    }
    async setMenuInfo() {
        const data = fetch(`${this.URL}/menu-info`)
        const json = await data.json()
        this.model.setMenuInfo(json);
        return json;
    }
    async setMenuImgs() {
        const data = fetch(`${this.URL}/image`)
        const json = await data.json()
        return json;
    }
    renderDefault() {
        for(let i = 0; i < this.setMenuInfo.list.length; i++) {
            this.appendProduct(i);
        }
    }
    appendProduct(i) {
        const $product = this.getContainerEl(i);
        this.$container.appendChild($product);
    }
    getContainerEl(i) {
        return _.genEl('LI', {
            classNames: ['product'],
            template: `<img src="${this.menuImgs.list[i]}" alt="${this.menuInfo.list[i].name}"
                class="product_img">
                <div class="product_name">${this.menuInfo.list[i].name}</div>
                <div class="product_price">${this.menuInfo.list[i].price}</div>`,
            attributes: {'data-index': `${i}`}
        });
    }
}