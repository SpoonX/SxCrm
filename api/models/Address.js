/**
* Address.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    type : {
      type : 'string',
      enum : ['home', 'work', 'warehouse', 'headquarter', 'delivery'] //can be completed !
    },
    country : {
      type : 'string'
    },
    state : {
      type : 'string'
    },
    city : {
      type : 'string'
    },
    postcode : {
      type : 'string'
    },
    street : {
      type : 'string'
    },
    streetNumber : {
      type : 'string'
    },
    company : {
      collection : 'company',
      via : 'addresses'
    },
    branch : {
      collection : 'branch',
      via : 'addresses',
    },
    contact : {
      collection : 'contact',
      via : 'addresses'
    }
  }
};
