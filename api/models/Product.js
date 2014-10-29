/**
* Product.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    name    : {
      type: 'string'
    },
    taxes   : { //<troll>in case you live in France :p</troll>
      collection: 'tax',
      via       : 'products'
    },
    price   : { //taxes are not included in the price
      type: 'integer'
    },
    branches: {
      collection: 'branch',
      via       : 'products'
      dominant  : true
    },
    company : {
      collection: 'company',
      via       : 'products'
    }
  }
};
