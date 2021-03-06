import { ErrorRequestHandler, Request, Response } from "express";
export class RoutesMiddleware {
    public static unauthorized(err: ErrorRequestHandler, req: Request, res: Response): void {
        if (err.name === "UnauthorizedError") {
            res.sendStatus(401);
        }
    }

    public static notFound(req: Request, res: Response): void {
        res.sendStatus(404);
    }
}
