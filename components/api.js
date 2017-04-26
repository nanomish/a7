import _ from 'lodash';

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

export function createNewItem(listId, itemObject) {
    // add created date and other data to the new item
    const _id = this.itemsData.length + 2;
    itemObject = _.extend({}, itemObject, {id: _id});
    this.itemsData.push(itemObject);
    this.catalogData = _.map(this.catalogData, c => {
        if (c.id = listId) {
            //TODO: following one line should be removed, as empty array would be added on list creation
            c.items || (c.items = []);
            c.items.push(itemObject.id);
        }
        return c;
    });
    return true;
}

export function createNewList(listObject) {
    var _id = this.catalogData.length + 2;
    var lister_url = "https://newadded-" + _id;
    listObject.id = _id;
    listObject.lister_url = lister_url;
    console.log('apis - createNewList - this.catalogData:', this.catalogData);
    this.catalogData.push(listObject);
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
    {
        id: 13,
        title: 'cat-title #13',
        lister_url: 'http://someurlhere-13',
        price: 39
    },
    {
        id: 14,
        title: 'cat-title #14',
        lister_url: 'http://someurlhere-14',
        price: 42
    },
    {
        id: 15,
        title: 'cat-title #15',
        lister_url: 'http://someurlhere-15',
        price: 45
    },
    {
        id: 16,
        title: 'cat-title #16',
        lister_url: 'http://someurlhere-16',
        price: 48
    },
    {
        id: 17,
        title: 'cat-title #17',
        lister_url: 'http://someurlhere-17',
        price: 51
    },
    {
        id: 18,
        title: 'cat-title #18',
        lister_url: 'http://someurlhere-18',
        price: 54
    },
    {
        id: 19,
        title: 'cat-title #19',
        lister_url: 'http://someurlhere-19',
        price: 57
    },
    {
        id: 20,
        title: 'cat-title #20',
        lister_url: 'http://someurlhere-20',
        price: 60
     }
];