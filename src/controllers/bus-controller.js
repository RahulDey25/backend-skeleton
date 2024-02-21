const Bus = require('../data-controllers/Bus')

async function busCreateController(req, res, next) {
    /*
    The following line is just an example
    */
    req.logger.info(req.body);

    /*
    Initialize the Bus data controller
    and call the createBus method
    */
    const bus = new Bus(req.client);
    const createResponse = await bus.createBus(req.body);
    res.json({
        message: "Bus created successfuly",
        created: createResponse
    })
}
module.exports = { busCreateController };