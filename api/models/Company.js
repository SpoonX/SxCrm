/**
* Company.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    name    : {
      type: 'string'
    },
    website : {
      type: 'url'
    },
    address : {
      model: 'address'
    },
    branches: {
      collection: 'branch',
      via       : 'company'
    },
    contacts: {
      collection: 'contact',
      via       : 'companies'
    }
  }
};
