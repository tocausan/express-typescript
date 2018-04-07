"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_1 = require("./users");
const errors_1 = require("./errors");
exports.Routes = express_1.Router()
    .get('/', (req, res, next) => {
    res.json('index');
})
    .use('/users', users_1.UserRoutes)
    .use(errors_1.ErrorRoutes);
