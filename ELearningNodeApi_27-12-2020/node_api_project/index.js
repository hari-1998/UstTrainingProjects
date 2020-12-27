process.env.DB_URI = require("./db/clouddb").DB_URI

var express = require('express')
var bodyParser = require('body-parser')

var router = express.Router();
require('./api/v1/courses')(router);

app = express();
app.use(bodyParser.json());
app.use(router);
app.listen(3003);

console.log('Listening on 3003')