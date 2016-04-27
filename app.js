var express = require('express');
var bodyParser = require('body-parser');
var log = require('./log.js');
var app = express();
var port = 3000;
app.set('port', port);
app.use(bodyParser.json());

var oauth2 = require('simple-oauth2')({
      clientID: "mywebapp",
      clientSecret: "mywebapp11",
      site: 'http://marat.aidbox.hs',
      tokenPath: '/oauth/token',
      authorizationPath: '/oauth/authorize'
});


var authorization_uri = oauth2.authCode.authorizeURL({
  redirect_uri: 'http://localhost:3000/callback',
    scope: 'ups',
    state: 'ups'
});

app.get('/auth', function(req, res) {
  res.redirect(authorization_uri);
});


app.get('/callback', function (req, res) {
  var code = req.query.code;

  oauth2.authCode.getToken({
    code: code,
    redirect_uri: 'http://localhost:3000/callback'
  }, saveToken);

  function saveToken(error, result) {
    log.info(result);
    if (error) { log.info('Access Token Error', error.message); }
    token = oauth2.accessToken.create(result);
    res.send(token);
  }
});

app.get('/', function (req, res) {
  res.send('Hello<br><a href="/auth">Log in with Aidbox Auth</a>');
});


exports.start = function() {
  app.listen(app.get('port'), function() {
    log.info('Server is running on port ' + port);
  });
  console.log('Express server started on port ' + port);
}

