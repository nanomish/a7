import {appData} from './AppData';

let ITEM = 'item';

export class Item {
    constructor() {
        appData.setData([]);
    }

    get() {
        return appData.getData(ITEM);
    }

    set(value) {
        return appData.setData(ITEM, value);
    }

    getUpdateTime() {
        return appData.getUpdateTime(ITEM);
    }

    addItemToList(item) {
        var cat = this.get();
        cat = cat.push(list);
        this.set(cat);
    }
}