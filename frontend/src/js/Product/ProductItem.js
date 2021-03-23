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
        <li>
            <img src=${imgurl} width="300px"/>
            <button class="btn btn-secondary">
                <span>${name}</span>
            </button>
            <span>${price}</span>
        </li>
        `;
        return html;
    };
}

export default ProductItem;
