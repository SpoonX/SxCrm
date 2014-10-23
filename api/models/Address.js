/**
* Address.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    country : {
      type : "string"
    },
    state : {
      type : "string"
    },
    city : {
      type : "string"
    },
    postCode : {
      type : "number"
    },
    street : {
      type : "string"
    },
    streetNumber : {
      type : "number"
    }
  }
};
