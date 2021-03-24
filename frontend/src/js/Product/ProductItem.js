class ProductItem {
    constructor(productData) {
        this.html = '';
        this.init(productData);
    };

    init = (productData) => {
        this.html = this.createHtml(productData);
    };

    createHtml = (data) => {
        const {name, price, imgurl} = data;
        const html = `
        <li class="product-item-container">
            <div class="product-item-img-container">
                <img src=${imgurl} class="img-fluid"/>
            </div>
            <div class="product-info-container">
                <button class="btn btn-secondary">${name}</button>
                <span class="item-price">${price}</span>
            </div>
        </li>
        `;
        return html;
    };
}

export default ProductItem;
