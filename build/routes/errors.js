"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const httpErrors = require("http-errors");
const express_1 = require("express");
exports.ErrorRoutes = express_1.Router()
    .use((req, res, next) => {
    next(httpErrors(404));
})
    .use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.json(err.message);
});
