/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var bcrypt = require('bcrypt');

module.exports = {
  /**
  * HandleLogin
  *
  */
  handleLogin : function(req, res) {
    /**
    * Input :
    * @email
    * @password
    */
    var email = req.param('email');
    var password = req.param('password');

    User.findOne({email : email}, function(err, user) {
      if (err) {
        return res.negotiate(err);
      }
      if (!user) {
        return res.json({
          auth : false
        });
      }
      //Now perform a BCrypt compare
      bcrypt.compare(password, user.password, function(err, response) {
        if (err) {
          return res.negotiate(err);
        }
        if(!response){
          return res.json({
            auth : false
          });
        }
        //now add it to session
        req.session.user = {
          auth : true,
          email : user.email
        };
        return res.json({
          auth : true,
          email : user.email
        });
      });
    });
  },
  /**
  * HandleLogout
  *
  */
  handleLogout : function(req, res) {
    if (req.session.user) {
      delete req.session.user;
    }

    return res.json({
      auth : false
    });
  }
};
