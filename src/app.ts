import * as express from 'express';
import * as path from 'path';
import * as bodyParser from "body-parser";
import * as cookieParser from 'cookie-parser';
import * as logger from 'morgan';
import * as ejs from 'ejs';
import {Config} from "./config";
import {Routes} from './routes';

export const App = express()
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .use(logger(Config.environment))
    .use(express.json())
    .use(express.urlencoded({extended: false}))
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({extended: false}))
    .use(cookieParser())
    .use(express.static(path.join(__dirname, 'public')))
    .use(Routes);

