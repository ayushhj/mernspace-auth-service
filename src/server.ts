import { Config } from './config/index'
import app from './app'
import logger from './config/logger'

const startServer = () => {
    const PORT = Config.PORT
    try {
        app.listen(PORT, () =>
            logger.info('server listening on port', { port: PORT }),
        )
    } catch (err) {
        console.error(err)
        process.exit(1)
    }
}

startServer()

// console.log(Config.PORT)
