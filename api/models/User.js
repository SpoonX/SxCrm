/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

var bcrypt = require("bcrypt");

module.exports = {

  attributes: {
    email : {
      type : "email"
    },
    password : {
      type : "string"
    }
  },
  beforeCreate : function(values,cb){
    //we are using BCrypt here to handle password hashing
    bcrypt.genSalt(10,function(err,salt){
      bcrypt.hash(values.password,salt,function(err,hash){
        values.password = hash;
        cb();
      });
    });
  }
};
