const express = require('express');
const marketRouter = express.Router();

marketRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the markets to you');
})
.post((req, res) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /markets');
    // should be able to post/put/delete your specific comments (not all comments) and not actual information about the markets//
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /markets ');
})
.delete((req, res) => {
    res.statusCode = 403;
    res.end('DELETE operation not supported on /markets ');
});

module.exports = marketRouter;