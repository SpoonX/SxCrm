/**
* Phone.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    type : {
      type : 'string',
      enum : ['home', 'work', 'mobile', 'proMobile']
    },
    number : {
      type : 'string'
    },
    contact : {
      collection : 'contact',
      via : 'phones'
    }
  }
};