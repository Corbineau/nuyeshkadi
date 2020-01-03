const mongoose = require('mongoose');
const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');


const API_PORT = process.env.API_PORT || 3001;
const app = express();
app.use(cors());
const router = express.Router();

// this is our MongoDB database
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongolab-flexible-35753";
mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    })
    .then(() => console.log('DB Connection Ok!'))
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
    app.use(express.static("build"));
}



// append /api for our http requests
app.use('/api', router);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));