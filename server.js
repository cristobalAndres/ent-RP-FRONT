const express = require('express');
const path = require('path');
const app = express();

// Serve static files....
app.use(express.static(__dirname + '/dist/ent-RP-FRONT'));

// Send all requests to index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/ent-RP-FRONT/index.html'));
});

// default Heroku PORT
app.listen(process.env.PORT || 3000);