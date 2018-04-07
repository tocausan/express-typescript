"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
exports.UserRoutes = express_1.Router()
    .get('/', function (req, res, next) {
    res.json('users');
});
