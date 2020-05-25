const mongoose = require('mongoose');
const path = require("path");
const express = require('express');
const routes = require("./routes");
const bodyParser = require('body-parser');
const logger = require('morgan');

const app = express();
const API_PORT = process.env.API_PORT || 3002;

// app.use(cors());
// const router = express.Router();

// this is our MongoDB database
const DBUSER = process.env.DBUSER;
const DBPASS = process.env.DBPASS;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/Lexicon" || `mongodb:${DBUSER}:${DBPASS}@ds347367.mlab.com:47367/heroku_dwr69vg9`
mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
    .then(() => console.log(`DB Connection Ok! at ${MONGODB_URI}`))
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
    app.use(express.static(__dirname + "/client/build"));
}



// app.use('/api', router);
app.use(routes)

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));