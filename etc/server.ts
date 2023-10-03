/** source/server.ts */
import http from 'http';
import express from 'express';
import routes from './routes/test';

const router = express();
/** Routes */
router.use('/', routes);

/** Error handling */
router.use((req, res, next) => {
    const error = new Error('not found');
    return res.status(404).json({
        message: error.message
    });
});

/** Server */
const PORT: any = process.env.PORT || 3001;
const httpServer = router.listen(PORT, () => console.log(`The server is running on port ${PORT}`));

httpServer.keepAliveTimeout = 120 * 1000;
httpServer.headersTimeout = 120 * 1000;
