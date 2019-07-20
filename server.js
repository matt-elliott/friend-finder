require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const port = process.env.port || 3000;
const bodyparser = require('body-parser');
const apiRoutes = require('./app/routing/apiRoutes');
global.appDir = path.dirname(require.main.filename) + '/app';
require('./app/routing/htmlRoutes')(app, bodyparser);
require('./app/routing/apiRoutes')(app, bodyparser);

app.use('/assets', express.static(`./app/public`));

function portListener() {
  console.log(`Listening on port: ${port}`);
}

app.listen(port, portListener);

