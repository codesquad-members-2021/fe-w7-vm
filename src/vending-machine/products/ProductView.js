import { _ } from '../../util/util.js';

export default class ProductView {
    constructor() {
        this.$target;
    }
    createProductEl(data, i) {
        const el = _.genEl('LI', {
            classNames: ['product'],
            template: this.getTemplate(data),
            attributes: {'data-index': `${i}`}
        });
        this.$target = el;
    }
    getTemplate({imgURL, name, price}) {
        return `<img src="${imgURL}" alt="${name}"
        class="product_img">
        <div class="product_name">${name}</div>
        <div class="product_price">${price}</div>`
    }
    getEl() {
        return this.$target;
    }
}