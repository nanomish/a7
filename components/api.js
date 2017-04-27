import _ from 'lodash';
import {Catalog} from '../data/Catalog';

function __p__(value) {
    return new Promise((resolve, reject) => {
        resolve(value);
        reject();
    })
}

export default class api {
    getListsData = function() {
        return this.listsData;
    }
}

export function getItem(id) {
    return _.find(this.itemsData, item => {
        return item.id == id;
    });
}

export function getItems(itemIds) {
    var result = _.map(itemIds, itemId => {
        return _.find(this.itemsData, i => {
            return i.id == itemId;
        });
    });
    return result;
}

export function getCatalog() {
    return this.catalogData || [];
}

export function getCatalogAsync() {
    return __p__(this.catalogData || []);
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
        return c;
    });
    return true;
}

export function createNewList(listObject) {
    var catalog = new Catalog();
    var _id = this.catalogData.length + 2;
    var lister_url = "https://newadded-" + _id;
    listObject.id = _id;
    listObject.lister_url = lister_url;
    console.log('apis - createNewList - this.catalogData:', this.catalogData);
    //this.catalogData.push(listObject);
    catalog.addListToCatalog(listObject);
    return {id: _id};
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
    },
    {
        id: 2,
        title: 'cat-title #2',
        lister_url: 'http://someurlhere-2',
        price: 354,
        items: [1, 2], 
    },
    {
        id: 3,
        title: 'cat-title #3',
        lister_url: 'http://someurlhere-3',
        price: 34, 
        items: [1], 
    },
   {
        id: 4,
        title: 'cat-title #4',
        lister_url: 'http://someurlhere-4',
        price: 12,
        items: [1, 2], 
    },
    {
        id: 5,
        title: 'cat-title #5',
        lister_url: 'http://someurlhere-5',
        price: 15,
        items: [1, 2],
    },
    {
        id: 6,
        title: 'cat-title #6',
        lister_url: 'http://someurlhere-6',
        price: 18
    },
    {
        id: 7,
        title: 'cat-title #7',
        lister_url: 'http://someurlhere-7',
        price: 21
    },
    {
        id: 8,
        title: 'cat-title #8',
        lister_url: 'http://someurlhere-8',
        price: 24
    },
    {
        id: 9,
        title: 'cat-title #9',
        lister_url: 'http://someurlhere-9',
        price: 27
    },
    {
        id: 10,
        title: 'cat-title #10',
        lister_url: 'http://someurlhere-10',
        price: 30
    },
    {
        id: 11,
        title: 'cat-title #11',
        lister_url: 'http://someurlhere-11',
        price: 33
    },
    {
        id: 12,
        title: 'cat-title #12',
        lister_url: 'http://someurlhere-12',
        price: 36
    },
];