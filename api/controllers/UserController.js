/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var BCrypt = require('bcrypt');

module.exports = {
	/**
	* HandleLogin
	*
	*/
	handleLogin:function(req,res) {
		if(!req.session.user){
			return res.json({
				auth : false
			});
		}
		else{
			/**
			*	Input :
			*	@login
			*	@password
			*/
			var login = req.param('login');
			var password = req.param('password');

			User.findOne({
				or : [
					{ username : login },
					{ email : login }
				]
			}).exec(function(err,user){
				//Now perform a BCrypt compare
				BCrypt.compare(password,user.password,function(err,res){
					if(res){
						//now add it to session
						req.session.user = {
							username : user.username,
							email : user.email
						}
						return res.json({
							auth : true,
							username : user.username,
							email : user.email
						});
					}
					else{
						//
						return res.json({
							auth : false
						});
					}
				});
			});
		}
	}
	/**
	* HandleLogout
	*
	*/
	handleLogout:function(req,res){
		if(req.session.user){
			req.session.user = {};
		}

		return res.json({
			auth : false
		});
	}
};

