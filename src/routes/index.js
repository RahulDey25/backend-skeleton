const { pingController } = require('../controllers/ping-controller');
const { busCreateController } = require('../controllers/bus-controller');
const bodyParser = require('body-parser');

function initExpressRoutes(app, client, logger) {
    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: false }))

    // parse application/json
    app.use(bodyParser.json())
    app.use((req, res, next) => {
        /**
        The following line attaches the MongoDB client to the request object 
        * */
        req.client = client;
        req.logger = logger;
        next();
    })

    app.get('/ping', pingController);
    app.post('/bus', busCreateController)


    //Add more routes
}


module.exports = initExpressRoutes;


/*   --------<!Error!>----------
module.exports = initExpressRoutes();
The error you're seeing is because you're immediately invoking initExpressRoutes when exporting it in index.js. Here's how to fix it:

In your index.js file, remove the parentheses when exporting initExpressRoutes:
module.exports = initExpressRoutes;

This change ensures that you're exporting the function itself rather than its return value, allowing you to call it with the app object in your main.js file.
*/