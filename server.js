const mongoose = require('mongoose');
const path = require("path");
const express = require('express');
const routes = require("./routes");
const bodyParser = require('body-parser');
const logger = require('morgan');
require('dotenv').config();

const app = express();
const API_PORT = process.env.API_PORT || 3002;

// this is our MongoDB database
const DBUSER = process.env.DBUSER;
const DBPASS = process.env.DBPASS;
const MONGODB_URI = process.env.MONGODB_URI || `mongodb:${DBUSER}:${DBPASS}@ds347367.mlab.com:47367/heroku_dwr69vg9`  
mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
    .then(() => console.log(`DB Connection Ok!`))
    .catch(err => {
        console.log(`DB Connection Error: ${err.message}`);
    });
let db = mongoose.connection;

db.once('open', () => console.log('connected to the database'));

// checks if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

if (process.env.NODE_ENV === "production") {
    // Express will serve up production assets
    // app.use(express.static(path.join(__dirname, "client/build")));
    app.use(express.static(__dirname + "client/build"));
}


app.use(routes)

// start the API server
app.listen(API_PORT, () => console.log(`Api server now listening on PORT ${API_PORT}`));