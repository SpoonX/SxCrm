/**
 * Before running any API tests, load (but don't lift!) our app.
 * Loading does the same thing as lifting, except it doesn't bind to a port.
 *
 * NOTICE:
 * This exposes the `sails` global.
 *
 * @framework mocha
 */

var SailsApp = require('sails').Sails,
    config   = require('./config.js'),
    Barrels  = require('barrels'),
    sails;

before(function (done) {

    sails = new SailsApp();
    sails.load(config, function (error, sails) {
      if (error) {
        return done(error);
      }

      var barrels = new Barrels();
      barrels.populate(function(error) {
        if (error) {
          return done(error);
        }

        done();
      });
    });
  // do sync bootstrappy stuff here.
});

after(function (done) {
  sails.lower(done)
});
