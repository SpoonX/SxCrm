var request = require('supertest'),
    assert  = require('chai').assert,
    agent;

function loginUser() {
  return function (done) {
    agent = request.agent(sails.hooks.http.app);

    var email    = "whang@dayrep.com"; //good email
    var password = "whang"; //good password

    agent
      .post('/user/authenticate')
      .send({email:email, password:password})
      .set('Content-Type', 'application/json')
      .expect(200, done);
  }
}

describe('ContactController', function() {

  /**
   * User connected cases
   */

    beforeEach(loginUser());

    /**
     * GET contact when user is connected
     */
    describe('.auth(true) : GET /contact', function() {
      it('Should return contacts array', function(done) {
          agent
            .get('/contact')
            .set('Content-Type', 'application/json')
            .expect('Content-Type', /json/)
            .expect(function (res) {
              assert.isArray(res.body, 'Array returned');
            })
            .expect(200, done);
      });
    });
    /**
     * POST contact when user is connected
     */
    describe('.auth(true) : POST /contact', function() {
      it('Should return the contact newly created object', function(done) {
        var newContact = {
          name          : "Skyler",
          lastName      : "White",
          phoneNumber   : "0478523698",
          emailAddress  : "skyler.white@dayrep.com"
        }
        agent
          .post('/contact')
          .set('Content-Type', 'application/json')
          .send(newContact)
          .expect('Content-Type', /json/)
          .expect(function(res) {
            assert.isObject(res.body, 'Object returned')
          })
          .expect(200, done);
      });
    });
    /**
     * PUT contact when user is connected
     */
    describe('.auth(true) : PUT /contact', function() {
      it('Should return the contact modifed object', function(done) {
        var editContact = {
          name : "Gus"
        }
        agent
          .put('/contact/2')
          .set('Content-Type', 'application/json')
          .send(editContact)
          .expect(function(res) {
            assert.isObject(res.body, 'Object returned')            
          })
          .expect(200, done);
      });
    });
    /**
     * DELETE contact when user is connected
     */
    describe('.auth(true) : DELETE /contact', function() {
      it('Should return the contact deleted object', function(done) {
        agent
          .delete('/contact/2')
          .expect(function(res) {
            assert.isObject(res.body, 'Object returned')
          })
          .expect(200, done);
      });
    });
  /**
   * User not connected cases
   */
    describe('.auth(false) : GET /contact', function() {
      it('Should return a 403 unauthorized access reponse', function(done) {
        request(sails.hooks.http.app)
          .get('/contact')
          .expect(403, done);
      });
    });
    describe('.auth(false) : POST /contact', function() {
      it('Should return a 403 unauthorized access reponse', function(done) {
        var newContact = {
          name          : "Jesse",
          lastName      : "Pinkman",
          phoneNumber   : "0479978698",
          emailAddress  : "jesse.pinkman@dayrep.com"
        }
        request(sails.hooks.http.app)
          .post('/contact')
          .send(newContact)
          .expect(403, done);
      });
    });
    describe('.auth(false) : PUT /contact', function() {
      it('Should return a 403 unauthorized access reponse', function(done) {
        var editContact = {
          name : "Heisenberg"
        }
        request(sails.hooks.http.app)
          .put('/contact/1')
          .send(editContact)
          .expect(403, done);
      });
    });
    describe('.auth(false) : DELETE /contact', function() {
      it('Should return a 403 unauthorized access reponse', function(done) {
        request(sails.hooks.http.app)
          .delete('/contact/1')
          .expect(403, done);
      });
    });
});
