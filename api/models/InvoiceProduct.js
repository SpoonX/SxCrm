/**
* InvoiceProduct.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    product : {
      model: 'product'
    },
    invoice : {
      model: 'invoice'
    },
    price   : {
      type: 'integer'
    },
    amount  : {
      type: 'integer'
    }
  }
};
