import {Router, Request, Response, NextFunction} from 'express';
import {UserRoutes} from "./users";

export const Routes = Router()

    .get('/', (req: Request, res: Response, next: NextFunction) => {
        res.render('index', {title: 'Express'});
    })

    .get('/users', UserRoutes);
