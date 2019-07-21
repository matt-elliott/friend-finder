module.exports = function (app){
  const bodyParser = require('body-parser');
  const fs = require('fs');

  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());

  app.get('/api/friends', function(req, res) {
    fs.readFile(
      `${global.appDir}/data/friends.json`,
      'utf8',
      function(error, data) {
        if(error) throw error;
        res.send(JSON.parse(data));
        res.end();
      }
    );
  });
  app.get('/api/friends/:friend', function(req, res) {
    res.send('SPECFIC FWEND!')
  });
  app.post('/api/addFriend',
  function(req, res) {
    let file = `${global.appDir}/data/friends.json`;
    let newData = [];

    try {
      let fileData = require(file);
      fileData.forEach(function(data) {
        newData.push(data);
      });
    } catch(error) {
      console.log(error);
    }

    newData.push(req.body);
    console.log(newData);

    fs.writeFile(
      file,
      JSON.stringify(newData),
      'utf8',
      function(error) {``
      if(error) throw error;
      console.log('Updated Friends.js')
      res.end();
    });
  });
}