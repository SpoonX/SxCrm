/**
* Contact.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    name          : {
      type: 'string'
    },
    lastName      : {
      type: 'string'
    },
    phoneNumbers  : {
      collection  : 'phone',
      via         : 'contacts',
      dominant    : true
    },
    emailAddress  : {
      type: 'email'
    },
    branches      : {
      collection  : 'branch',
      via         : 'contacts',
      dominant    : true // no matter...but needed
    },
    companies     : {
      collection  : 'company',
      via         : 'contacts',
      dominant    : true
    },
    addresses     : {
      collection  : 'address',
      via         : 'contacts',
      dominant    : true
    },
    invoice       : {
      collection: 'invoice',
      via       : 'contact'
    }
  }
};
