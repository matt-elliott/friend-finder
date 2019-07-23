require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');

global.appDir = path.dirname(require.main.filename) + '/app';

const port = process.env.PORT || 3000;
const bodyparser = require('body-parser');
const apiRoutes = require('./app/routing/apiRoutes');

require('./app/routing/htmlRoutes')(app);
require('./app/routing/apiRoutes')(app);

app.use('/assets', express.static(`./app/public`));

function portListener() {
  console.log(`Listening on port: ${port}`);
}

app.listen(port, portListener);

