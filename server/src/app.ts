import * as express from 'express';
import * as path from 'path';
import * as cookieParser from 'cookie-parser';
import * as logger from 'morgan';
import * as httpErrors from 'http-errors';
import {Config} from "./config";
import {Routes} from './routes';
import {Request, Response, NextFunction} from "express";

export const App = express()
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'jade')

    .use(logger(Config.environment))
    .use(express.json())
    .use(express.urlencoded({extended: false}))
    .use(cookieParser())
    .use(express.static(path.join(__dirname, 'public')))

    .use(Routes)

    // catch 404 and forward to error handler
    .use((req: Request, res: Response, next: NextFunction) => {
        next(httpErrors(404));
    })

    // error handler
    .use((err: any, req: Request, res: Response, next: NextFunction) => {
        // set locals, only providing error in development
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};

        // render the error page
        res.status(err.status || 500);
        res.render('error');
    });

