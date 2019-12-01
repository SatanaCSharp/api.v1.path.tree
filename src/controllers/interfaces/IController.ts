import { Request, Response } from "express";

export interface IShowAll {
    index(req: Request, res: Response): Promise<void>;
}
export interface ICreate {
    store(req: Request, res: Response): Promise<void>;
}
export interface IUpdate {
    update(req: Request, res: Response): Promise<void>;
}
export interface IShow {
    show(req: Request, res: Response): Promise<void>;
}
export interface IDelete {
    delete(req: Request, res: Response): Promise<void>;
}
