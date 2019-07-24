const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const api = require('./src/routes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const router = express.Router();

// Priority serve any static files.
// app.use(express.static(path.resolve(__dirname, '../../client/build')));

app.use('/api', api);

// All remaining requests return the React app, so it can handle routing.
// app.get('*', function(request, response) {
//   response.sendFile(
//     path.resolve(__dirname, '../../client/build', 'index.html')
//   );
// });

app.use(router);
app.set('port', process.env.PORT || 3001);

app.listen(app.get('port'), () => {
  console.log(`Listening on ${app.get('port')}`);
});
