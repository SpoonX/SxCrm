/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

var BCrypt = require("bcrypt");

module.exports = {

  attributes: {
  	username : {
  		type : "string"
  	},
  	password : {
  		type : "string"
  	},
  	email : {
  		type : "email"
  	}
  },
  beforeCreate : function(values,cb){
  	//we are using BCrypt here to handle password hashing
  	BCrypt.genSalt(10,function(err,salt){
  		bcrypt.hash(values.password,salt,function(err,hash){
  			values.password = hash;
  			cb();
  		});
  	});
  }
};

