import {NextFunction, Request, Response} from "express";
import {IMiddleware} from "./interfaces/IMiddleware";


export class PathMiddleware implements IMiddleware {
    public  validate(req: Request, res: Response, next: NextFunction): void {
       const regexp = /((\/)(\w+))|((?:[a-zA-Z]|\\\\[\w]+\\[\w.$]+)\\(?:[\w]+\\)*\w([\w.])+)/g;
       if (!regexp.test(req.body.name)) {
           res.send({message: "The path is incorrect"});
       } else {
           next();
       }
    }
}
