const express = require('express');
const producerRouter = express.Router();

producerRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the producers to you');
})
.post((req, res) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /producers ');
    // should be able to post/put/delete your specific comments (not all comments) and not actual information about the producer//
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /producers ');
})
.delete((req, res) => {
    res.statusCode = 403;
    res.end('DELETE operation not supported on /producers ');
});

module.exports = producerRouter;