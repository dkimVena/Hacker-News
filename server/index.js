const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const isProduction = process.env.NODE_ENV === 'production';

const api = require('./src/routes');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const router = express.Router();

app.use('/api', api);

if (isProduction) {
  app.use(express.static(path.resolve(__dirname, '../../client/build')));

  app.get('*', function(request, response) {
    response.sendFile(
      path.resolve(__dirname, '../../client/build', 'index.html')
    );
  });
}

app.use(router);
app.set('port', process.env.PORT || 3001);

app.listen(app.get('port'), () => {
  console.log(`Listening on ${app.get('port')}`);
});
