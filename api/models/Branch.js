/**
* Branch.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    name : {
      type : 'string'
    },
    website : {
      type : 'url'
    },
    company : {
      model : 'company'
    },
    addresses : {
      model : 'address',
    },
    contacts : {
      collection : 'contact',
      via : 'branches'
    }
  }
};
