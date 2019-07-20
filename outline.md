# OUTLINE
user fills out survey and data is saved to app/data/friends.js
user answers are compared each stored answers in db
score cannot have negative numbers

once scores are found find most compatible match
present match to user

## TODO BONUS 
save and retrieve answers from a database

### Psudeocode
##### server.js
  - require express, dotenv, path, and custom modules (apiRoutes.js, htmlRoutes.js)
  - start server on specified port

##### apiRoutes.js
  - define routes for app to get and send data to db (beta: data/friends.js, alpha: connected to a db)
  ```
  app.get('/api/friends', function() {
    //gets friends.js and returns to user
  })
  app.get('/api/friends/:friend', function() {
    //gets friends.js and returns an entry based on id
  })
  app.post('/api/addFriend', function() {
    //adds body params to db as new entry
    //to be used by the survey form
  })
  ```

##### htmlRoutes.js
  - define routes for the front end to send users either to catchall homepage or survey
  ```
  app.get('/survey', function() {
    res.send(public/servey.html)
  })
  app.get('*', function() {
    res.send(public/home.html)
  })
  ```

#### findFriends.js
  - a module to match user answers with a user in the database
- returns a match and displays to the user
