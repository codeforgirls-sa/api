/**
 * Required External Modules
 */
const express = require("express");
var bodyParser = require("body-parser");

/**
 * App Variables
 */
const app = express();

/**
 *  App Configuration
 */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/**
 * Routes Definitions
 */








/**
 * Server Activation
 */
app.listen('8080', () => {
    console.log(`Listening to requests on http://localhost:8080`);
});
