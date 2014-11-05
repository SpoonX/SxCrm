/**
* Invoice.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  
  autoCreatedAt : false, //we use invoiceDate instead
  attributes    : {
    invoiceDate : {
      type      : 'datetime',
      defaultsTo: function () { 
        return new Date(); 
      }
    },
    dueDate     : {
      type: 'datetime'
    },
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
