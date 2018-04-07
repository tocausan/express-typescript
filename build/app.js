"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var config_1 = require("./config");
var routes_1 = require("./routes");
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
