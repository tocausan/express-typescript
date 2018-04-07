"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var users_1 = require("./users");
var errors_1 = require("./errors");
exports.Routes = express_1.Router()
    .get('/', function (req, res, next) {
    res.json('index');
})
    .use('/users', users_1.UserRoutes)
    .use(errors_1.ErrorRoutes);
