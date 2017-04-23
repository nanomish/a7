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
    console.log('items found (some undefined)\'s:', itemIds);
    var result = _.map(itemIds, itemId => {
        console.log('items found (some undefined):', itemId);
        return _.find(this.itemsData, i => {
            console.log('i = ', i)
            return i.id == itemId;
        });
    });
    console.log('items found (some undefined) result:', result);
    return result;
}

export function getCatalog() {
    return this.catalogData;
}

export function createNewList(listObject) {
    var _id = this.catalogData.length + 2;
    var lister_url = "https://newadded-" + _id;
    listObject.id = _id;
    listObject.lister_url = lister_url;
    this.catalogData.push(listObject);
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
        title: 'title #1',
        lister_url: 'http://someurlhere-1',
        price: 34,
        items: [1, 2], 
    },
    {
        id: 2,
        title: 'title #2',
        lister_url: 'http://someurlhere-2',
        price: 354,
        items: [1, 2], 
    },
    {
        id: 3,
        title: 'title #3',
        lister_url: 'http://someurlhere-3',
        price: 34, 
        items: [1], 
    },
   {
        id: 4,
        title: 'title #4',
        lister_url: 'http://someurlhere-4',
        price: 12,
        items: [1, 2], 
    },
    {
        id: 5,
        title: 'title #5',
        lister_url: 'http://someurlhere-5',
        price: 15,
        items: [1, 2],
    },
    {
        id: 6,
        title: 'title #6',
        lister_url: 'http://someurlhere-6',
        price: 18
    },
    {
        id: 7,
        title: 'title #7',
        lister_url: 'http://someurlhere-7',
        price: 21
    },
    {
        id: 8,
        title: 'title #8',
        lister_url: 'http://someurlhere-8',
        price: 24
    },
    {
        id: 9,
        title: 'title #9',
        lister_url: 'http://someurlhere-9',
        price: 27
    },
    {
        id: 10,
        title: 'title #10',
        lister_url: 'http://someurlhere-10',
        price: 30
    },
    {
        id: 11,
        title: 'title #11',
        lister_url: 'http://someurlhere-11',
        price: 33
    },
    {
        id: 12,
        title: 'title #12',
        lister_url: 'http://someurlhere-12',
        price: 36
    },
    {
        id: 13,
        title: 'title #13',
        lister_url: 'http://someurlhere-13',
        price: 39
    },
    {
        id: 14,
        title: 'title #14',
        lister_url: 'http://someurlhere-14',
        price: 42
    },
    {
        id: 15,
        title: 'title #15',
        lister_url: 'http://someurlhere-15',
        price: 45
    },
    {
        id: 16,
        title: 'title #16',
        lister_url: 'http://someurlhere-16',
        price: 48
    },
    {
        id: 17,
        title: 'title #17',
        lister_url: 'http://someurlhere-17',
        price: 51
    },
    {
        id: 18,
        title: 'title #18',
        lister_url: 'http://someurlhere-18',
        price: 54
    },
    {
        id: 19,
        title: 'title #19',
        lister_url: 'http://someurlhere-19',
        price: 57
    },
    {
        id: 20,
        title: 'title #20',
        lister_url: 'http://someurlhere-20',
        price: 60
     }
];