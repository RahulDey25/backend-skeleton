function pingController(res,res,next) {
    res.json({
        message: 'pong'
    })
}
module.exports = {pingController};