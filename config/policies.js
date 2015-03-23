/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your controllers.
 * You can apply one or more policies to a given controller, or protect
 * its actions individually.
 *
 * Any policy file (e.g. `api/policies/authenticated.js`) can be accessed
 * below by its filename, minus the extension, (e.g. "authenticated")
 *
 * For more information on how policies work, see:
 * http://sailsjs.org/#/documentation/concepts/Policies
 *
 * For more information on configuring policies, check out:
 * http://sailsjs.org/#/documentation/reference/sails.config/sails.config.policies.html
 */

module.exports.policies = {
  '*': false, //by default accept no request
  //User
  UserController    : {
    'handleLogin'   : true,
    'handleLogout'  : ['userAuth'],
    'identification': true
  },
  //Contact
  ContactController : {
    'find'   : ['userAuth'], 
    'create' : ['userAuth'],
    'update' : ['userAuth'],
    'destroy': ['userAuth']
  },
  //Address
  AddressController : {
    'find'   : ['userAuth'], 
    'create' : ['userAuth'],
    'update' : ['userAuth'],
    'destroy': ['userAuth']
  },
  //Phone
  PhoneController   : {
    'find'   : ['userAuth'], 
    'create' : ['userAuth'],
    'update' : ['userAuth'],
    'destroy': ['userAuth']
  },
  //Branch
  BranchController  : {
    'find'   : ['userAuth'], 
    'create' : ['userAuth'],
    'update' : ['userAuth'],
    'destroy': ['userAuth']
  },
  //Company
  CompanyController : {
    'find'   : ['userAuth'], 
    'create' : ['userAuth'],
    'update' : ['userAuth'],
    'destroy': ['userAuth']
  }
};
