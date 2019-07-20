module.exports = function (app, bodyparser){
  app.get('/api/friends', function(req, res) {
    res.send('FWENDS!')
  });
  app.get('/api/friends/:friend', function(req, res) {
    res.send('SPECFIC FWEND!')
  });
  app.get('/api/addFriend', function(req, res) {
    res.send('SPECFIC FWEND!')
  });
}