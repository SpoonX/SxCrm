var request = require('supertest'),
    assert  = require('chai').assert;

describe('UserController',function(){
  /**
  * Auth with bad email and bad password
  *
  */
  describe('.auth(false): POST /user/authenticate', function() {
    it('Should return auth:false status when using bad email and password', function(done) {

      var email = "qwerty@dayrep.com"; //test bad email case
      var password = "qwerty"; //test bad password case

      request(sails.hooks.http.app)
        .post('/user/authenticate')
        .send({email:email,password:password})
        .set('Content-Type','application/json')
        .expect('Content-Type', /json/)
        .expect(function(res){
          //auth status
          assert.property(res.body,'auth','Auth status returned');
          assert.strictEqual(res.body.auth,false,'Auth status equal false')
        })
        .expect(200,done);  

    })
  });
  /**
  * Auth with good email and bad password
  *
  */
  describe('.auth(false): POST /user/authenticate', function() {
    it('Should return auth:false status when the email is good and password bad', function(done) {

      var email = "whang@dayrep.com"; //test bad email case
      var password = "qwerty"; //test bad password case

      request(sails.hooks.http.app)
        .post('/user/authenticate')
        .send({email:email,password:password})
        .set('Content-Type','application/json')
        .expect('Content-Type', /json/)
        .expect(function(res){
          //auth status
          assert.property(res.body,'auth','Auth status returned');
          assert.strictEqual(res.body.auth,false,'Auth status equal false')
        })
        .expect(200,done);  

    })
  });

  /**
  * Auth with good match
  *
  */
  describe('.auth(true): POST /user/authenticate', function() {
    it('Should return the email, email and auth:true status when the match is good', function(done) {

      var email = "whang@dayrep.com"; //test good email case
      var password = "whang"; //good password case

      request(sails.hooks.http.app)
        .post('/user/authenticate')
        .send({email:email,password:password})
        .set('Content-Type', 'application/json')
        .expect('Content-Type', /json/)
        .expect(function (res) {
          //auth status
          assert.property(res.body,'auth', 'Auth status returned');
          assert.strictEqual(res.body.auth, true, 'Auth statue equals true');
          //email
          assert.property(res.body,'email', 'Email returned');
          assert.strictEqual(res.body.email, email, 'Email equals : ' + email);
        })
        .expect(200, done);
    })
  });
});
