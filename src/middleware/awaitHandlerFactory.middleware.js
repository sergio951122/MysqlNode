const awaitHandlerFactory = (middleware) => {
    return async (req, res, next) => {
        try {
            console.log('SC1');
            await middleware(req, res, next)
        } catch (err) {
            next(err)
        }
    }
}

module.exports = awaitHandlerFactory;