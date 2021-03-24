import { _ } from "../../util/util"

export default class ProductContainerView {
    constructor() {
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
        // container 내부 아이템 하나하나에 이벤트 연결(이벤트 위임)
        this.$container.addEventListener('click', bind(this))
    }

}