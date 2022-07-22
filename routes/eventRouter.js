const express = require('express');
const eventRouter = express.Router();

eventRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the events to you');
})
.post((req, res) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /events');
    // should be able to post/put/delete your specific comments (not all comments) and not actual information about the event//
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /events ');
})
.delete((req, res) => {
    res.statusCode = 403;
    res.end('DELETE operation not supported on /events ');
});

module.exports = eventRouter;