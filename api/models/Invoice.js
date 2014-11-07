/**
* Invoice.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  
  attributes: {
    products    : {
      colllection : 'invoiceProduct',
      via         : 'invoice'
    },
    //following are clients( no polymorphic association... )
    company     : {
      model: 'company'
    },
    branch      : {
      model: 'branch'
    },
    contact     : {
      model: 'contact'
    }
  }
};
