/**
* Branch.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    type    : {
      type: 'string',
      in  : ['subsidiary', 'departement', 'delivery', 'warehouse']
    },
    name    : {
      type: 'string'
    },
    website : {
      type: 'url'
    },
    company : {
      model: 'company'
    },
    address : {
      model: 'address',
    },
    contacts: {
      collection: 'contact',
      via       : 'branches'
    },
    products: {
      model: 'product'
    },
    invoice : {
      collection: 'invoice',
      via       : 'branch'
    },
    //self association
    mother  : {
      model : 'branch'
    },
    child   : {
      collection: 'invoice',
      via       : 'branch'
    }
  }
};
