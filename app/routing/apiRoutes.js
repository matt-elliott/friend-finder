module.exports = function (app){
  const bodyParser = require('body-parser');
  const fs = require('fs');
  const matchFriend = require(`${global.appDir}/Services/matchFriend`);

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

  app.get('/api/friends/:name', function(req, res) {
    let friendName = req.params.name;
    
    fs.readFile(
      `${global.appDir}/data/friends.json`,
      'utf8',
      function(error, data) {
        if(error) throw error;
        let results = JSON.parse(data);
        let match;

        results.forEach(function(r) {
          if(r.name === friendName) {
            console.log(r);
            match = r;
          }
        });

        res.send(match);
        res.end();
      }
    );
  });

  app.post('/api/addFriend',
  function(req, res) {
    let file = `${global.appDir}/data/friends.json`;
    let newData = [];
    //TODO move the data building and sanatizing into a service
    try {
      let fileData = require(file);
      fileData.forEach(function(data) {
        newData.push(data);
      });
    } catch(error) {
      console.log(error);
    }

    let {name, photo, question1, question2, question3, question4, question5, question6, question7, question8, question9, question10, question11, question12} = req.body;

    
    let sanitizedData = {
      "name": name,
      "photo": photo,
      "scores": [
        question1,
        question2,
        question3,
        question4,
        question5,
        question6,
        question7,
        question8,
        question9,
        question10,
        question11,
        question12
      ]
    }
    
    newData.push(sanitizedData);
    matchFriend(file, sanitizedData);
    // fs.writeFile(
    //   file,
    //   JSON.stringify(newData),
    //   'utf8',
    //   function(error) {
    //     if(error) throw error;
    //     console.log('Updated Friends.js');
    //     // matchFriend(file, name);
    //     res.end();
    //   }
    // );
  });
}