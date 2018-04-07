"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var httpErrors = require("http-errors");
var express_1 = require("express");
exports.ErrorRoutes = express_1.Router()
    .use(function (req, res, next) {
    next(httpErrors(404));
})
    .use(function (err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.json(err.message);
});
