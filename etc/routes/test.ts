/** etc/routes/test.ts */
import express from 'express';
import controller from '../controllers/test';
import { handleResponse } from '../shared/handle-response';

const router = express.Router();
router.get('/test', function (req, res) {
    controller.getTests()
        .then(data => handleResponse.Res(res, data))
        .catch(err => handleResponse.Err(res, err));
});

export = router;