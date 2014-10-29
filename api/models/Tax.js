/**
* Tax.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    name    : {
      type: 'string'
    },
    value   : {
      type: 'integer'
    },
    products: {
      collection: 'product',
      via       : 'taxes',
      dominant  : true
    }
  }
};