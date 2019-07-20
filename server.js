require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const port = process.env.port || 3000;
require('./app/routing/apiRoutes');
require('./app/routing/htmlRoutes');

function portListener() {
  console.log(`Listening on port: ${port}`);
}

app.listen(port, portListener);

