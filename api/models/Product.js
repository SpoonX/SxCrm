/**
* Product.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    name        : {
      type: 'string'
    },
    tax         : {
      type: 'numeric' // TODO: discuss about a model including taxes -> association...
    },
    primaryPrice: { //tax is not included in the price
      type: 'numeric'
    },
    soldBy      : {
      collection: 'branch',
      via       : 'products'
    }
  }
};
