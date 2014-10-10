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
		if(req.session.user){
			return res.json(req.session.user);
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
				if(user){
					//Now perform a BCrypt compare
					BCrypt.compare(password,user.password,function(err,response){
						if(response){
							//now add it to session
							req.session.user = {
								username : user.username,
								email : user.email,
								auth : true
							};
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
				}
				else{
					return res.json({
						auth : false
					});
				}
			});
		}
	},
	/**
	* HandleLogout
	*
	*/
	handleLogout:function(req,res){
		if(req.session.user){
			delete req.session.user;
		}

		return res.json({
			auth : false
		});
	}
};

