'use strict';

// middleware
var secrets       = require('../config/secrets'),
isAuthenticated   = require('../middleware/auth').isAuthenticated,
isUnauthenticated = require('../middleware/auth').isUnauthenticated,
setRender         = require('middleware-responder').setRender,
setRedirect       = require('middleware-responder').setRedirect;

// controllers
var passwords     = require('../controllers/passwords-controller');

module.exports    = function (app) {

  app.route('/forgot')
     .all(setRedirect({auth: '/dashboard'}))
     .all(isUnauthenticated)
     .get(setRender('forgot'), passwords.getForgotPassword)
     .post(passwords.postForgotPassword);

  // app.get('/forgot',
  //   setRedirect({auth: '/dashboard'}),
  //   isUnauthenticated,
  //   setRender('forgot'),
  //   passwords.getForgotPassword
  // );


  // app.post('/forgot',
  //   setRedirect({auth: '/dashboard', success: '/forgot', failure: '/forgot'}),
  //   isUnauthenticated,
  //   passwords.postForgotPassword
  // );

  // reset tokens
  app.route('/reset/:token')
     .all(setRedirect({auth: '/dashboard', success: '/dashboard', failure: '/forgot'}))
     .all(isUnauthenticated)
     .get(setRender('reset'), passwords.getToken)
     .post(passwords.postToken);

  // app.get('/reset/:token',
  //   setRedirect({auth: '/dashboard', failure: '/forgot'}),
  //   isUnauthenticated,
  //   setRender('reset'),
  //   passwords.getToken
  // );

  // app.post('/reset/:token',
  //   setRedirect({auth: '/dashboard', success: '/dashboard', failure: 'back'}),
  //   isUnauthenticated,
  //   passwords.postToken
  // );


};	


// Fancy console.log
function output (err, data) {
  console.dir (err || data, {
    depth: null,
    colors: true
  });
}