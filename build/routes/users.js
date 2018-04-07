"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
exports.UserRoutes = express_1.Router()
    .get('/', (req, res, next) => {
    res.json('users');
});
