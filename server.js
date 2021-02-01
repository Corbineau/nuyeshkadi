const mongoose = require('mongoose');
const path = require("path");
const express = require('express');
const routes = require("./routes");
const bodyParser = require('body-parser');
const logger = require('morgan');
const { Client } = require('pg');
require('dotenv').config();

const app = express();
const API_PORT = process.env.API_PORT || 3001;

// this is our postGres database


const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect();

client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
  client.end();
});


// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

if (process.env.NODE_ENV === "production") {
    // Express will serve up production assets
    app.use(express.static(__dirname + "client/build"));
}


app.use(routes)

// start the API server
app.listen(API_PORT, () => console.log(`Api server now listening on PORT ${API_PORT}`));