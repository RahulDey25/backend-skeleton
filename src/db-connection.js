const { MongoClient, ServerApiVersion } = require('mongodb');

async function createDatabaseConnection(mongoDatabaseURL, logger) {

    try {

        logger.info('Attempting to connect to database...')
        /* This following line creates a new MongoClient
            which will later be used  to connect to a mongodb server
        */
        const client = new MongoClient(mongoDatabaseURL, {
            serverApi: {
              version: ServerApiVersion.v1,
              strict: true,
              deprecationErrors: true,
            }
          });

          /* The following line connects to the mongodb server  */
          await client.connect();
          logger.info('Connection to database established succesfully!')
          return client;
    } catch (error) {
        logger.error('Error while connecting to database: ',error);
    }
};

module.exports = {
    createDatabaseConnection
};