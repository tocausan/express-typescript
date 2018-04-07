"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const config_1 = require("./config");
const routes_1 = require("./routes");
exports.App = express()
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .use(logger(config_1.Config.environment))
    .use(express.json())
    .use(express.urlencoded({ extended: false }))
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: false }))
    .use(cookieParser())
    .use(express.static(path.join(__dirname, 'public')))
    .use(routes_1.Routes);
