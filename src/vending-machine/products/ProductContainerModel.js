import { _ } from '../../util/util.js';
import Observable from '../../util/Observable.js';

export default class ProductContainerModel extends Observable{
    constructor() {
        super();
        this.menuInfo;
    }
    setMenuInfo(json) {
        this.menuInfo = json;
    }
}