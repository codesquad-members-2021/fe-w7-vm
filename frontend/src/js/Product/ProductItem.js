class ProductItem {
    constructor(productData) {
        this.html = '';
        this.init(productData);
    };

    init = (productData) => {
        this.html = this.createHtml(productData);
    };

    createHtml = (data) => {
        const {name, price} = data;
        const html = `
        <li class="product-item-container">
            <img>
            <button class="btn btn-secondary">
                <span>${name}</span>
            </button>
            <span class="item-price">${price}</span>
        </li>
        `;
        return html;
    };
}

export default ProductItem;
