import {appData} from './AppData';

let CATALOG = 'catalog';

export class Catalog {
    constructor() {
        appData.setData([]);
    }

    get() {
        return appData.getData(CATALOG);
    }

    set(value) {
        return appData.setData(CATALOG, value);
    }

    getUpdateTime() {
        return appData.getUpdateTime(CATALOG);
    }

    addListToCatalog(list) {
        var cat = this.get();
        cat = cat.push(list);
        this.set(cat);
    }
}