
/* This file initializes the whole application
    For any initialization code, this is the place to put it
*/





const express = require('express');
// const logger = require('winston');
const initExpressRoutes = require('./routes');
const { logger } = require('./logger')

const { createDatabaseConnection } = require('./db-connection');


/* This line is to load the environment variables from the .env file 
after installing npm install dotenv
*/
require('dotenv').config();
const uri = process.env.MONGODB_URI;
const port = process.env.SERVER_PORT;

async function init() {
    if (!uri) {
        throw new Error('MONGO_URI environment variable is not set!');
    }
    if (!port) {
        throw new Error("MONGODB_URI environment variable is not set");
    }

    const client = await createDatabaseConnection(uri, logger);
    const app = express();
    initExpressRoutes(app, client, logger);

    app.listen(port, () => {
        logger.info(`Server is running on port ${port}!`);
    })
}

init()
    .catch(err => {
        logger.error('Error while initializing application:', err);
    })

// Mongo init added