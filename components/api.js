import _ from 'lodash';
import {Catalog} from '../data/Catalog';

function __p__(value) {
    return new Promise((resolve, reject) => {
        resolve(value);
        reject();
    })
}
/* ================= Lists: ================= */
export default class api {
    getListsData = function() {
        return this.listsData;
    }
}

export function getCatalog() {
    return this.catalogData || [];
}

export function getCatalogAsync() {
    return __p__(this.catalogData || []);
}

export function createNewList(listObject) {
    var catalog = new Catalog();
    var _id = this.catalogData.length + 2;
    var lister_url = "https://newadded-" + _id;
    listObject.id = _id;
    listObject.lister_url = lister_url;
    catalog.addListToCatalog(listObject);

    return __p__({id: _id});
}


/* ================= Items: ================= */
export function getItem(id) {
    var item = _.find(this.itemsData, item => {
        return item.id == id;
    });
    return __p__(item);
}

export function getListItems(listItemsIds) {
    var result = _.map(listItemsIds, item => {
        return _.find(this.itemsData, i => {
            return i.id == item.item_id;
        });
    });
    return result;
}

export function getListItemsAsync(listItemsIds) {
    var result = _.map(listItemsIds, item => {
        return _.find(this.itemsData, i => {
            return i.id == item.item_id;
        });
    });
    return __p__(result || []);
}

export function createNewItem(listId, itemObject) {
    // add created date and other data to the new item
    const _id = this.itemsData.length + 2;
    itemObject = _.extend({}, itemObject, {id: _id});
    this.itemsData.push(itemObject);
    this.catalogData = _.map(this.catalogData, c => {
        if (c.id == listId) {
            //TODO: following one line should be removed, as empty array would be added on list creation
            c.items || (c.items = []);
            c.items.push(itemObject.id);
        }
        return __p__(c);
    });
    return __p__(true);
}

export var itemsData = [
    {
        id: 1,
        title: 'item #1',
        url: 'url #1'
    },{
        id: 2,
        title: 'item #2',
        url: 'url #2'
    }
];

export var catalogData = [
    {
        id: 1,
        title: 'cat-title #1',
        lister_url: 'http://someurlhere-1',
        price: 34,
        items: [1, 2],
        list_items: [
            {
                item_id: 1,
                status: 'open',
                amount: 2
            },
            {
                item_id: 2,
                status: 'open',
                amount: 2
            }
        ]
    },
    {
        id: 2,
        title: 'cat-title #2',
        lister_url: 'http://someurlhere-2',
        price: 354,
        items: [1, 2],
        list_items: [
            {
                item_id: 1,
                status: 'open',
                amount: 2
            },
            {
                item_id: 2,
                status: 'open',
                amount: 2
            }
        ]
    },
    {
        id: 3,
        title: 'cat-title #3',
        lister_url: 'http://someurlhere-3',
        price: 34,
        items: [1],
        list_items: [
            {
                item_id: 1,
                status: 'open',
                amount: 2
            },
            {
                item_id: 2,
                status: 'open',
                amount: 2
            }
        ]
    },
   {
        id: 4,
        title: 'cat-title #4',
        lister_url: 'http://someurlhere-4',
        price: 12,
        items: [1, 2],
        list_items: [
            {
                item_id: 1,
                status: 'open',
                amount: 2
            },
            {
                item_id: 2,
                status: 'open',
                amount: 2
            }
        ]
    },
];